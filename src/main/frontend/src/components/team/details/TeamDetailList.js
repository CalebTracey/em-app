import React, { useState, useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import { useDispatch } from 'react-redux';
import { Result, Button, message, List } from 'antd';
import api from '../../../apis/api';
import './TeamDetails.css';
import TeamDetailItemContainer from './containers/TeamDetailItemContainer';
import allActions from '../../../redux/actions/index';

const TeamDetailList = ({ team, setShowModal }) => {
  const [employeeState, setEmployeeState] = useState(team.employees);
  const dispatch = useDispatch();
  const success = (text) => {
    message.success(text);
  };

  const handleRemoveTeamMember = (employee, teamFrom) => {
    const filter = teamFrom.employees.filter((e) => e.id !== employee.id);
    const updatedTeam = {
      teamName: teamFrom.teamName,
      id: teamFrom.id,
      employees: filter,
      // tasks: teamFrom.tasks,
    };
    setEmployeeState(updatedTeam.employees);
    dispatch(allActions.employees.employeeDeleted(employee.id));
    api.delete(`employees/${employee.id}`);
    success(`${employee.firstName} ${employee.lastName} removed from ${teamFrom.teamName}`);
  };
  // team,
  // employee,
  // setShowModal,
  // handleRemoveTeamMember,
  // confirmLoading,

  const teamList = () => {
    return team.employees.map((e) => {
      return (
        <TeamDetailItemContainer
          team={team}
          key={e.id}
          employee={e}
          setShowModal={setShowModal}
          handleRemoveTeamMember={handleRemoveTeamMember}
        />
      );
    });
  };

  const teamListContainer =
    employeeState.length === 0 ? (
      <Result
        key={team.teamName}
        title={`${team.teamName} has no members.`}
        extra={
          <Button type="primary" key="console">
            Add Members
          </Button>
        }
      />
    ) : (
      teamList()
    );

  return (
    <div style={{ margin: '10px' }}>
      <List>
        <QueueAnim key="nodeMap" type={['right', 'left']} leaveReverse>
          {teamListContainer}
        </QueueAnim>
      </List>
    </div>
  );
};

export default TeamDetailList;

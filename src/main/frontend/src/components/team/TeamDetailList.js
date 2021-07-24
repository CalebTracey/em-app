import React, { useEffect, useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import { useDispatch } from 'react-redux';
import { Result, Button, message } from 'antd';

import './TeamDetails.css';
import TeamDetailListItem from './TeamDetailListItem';
import allActions from '../../redux/actions/index';

const TeamDetailList = ({
  team,
  setShowModal,
  //handleRemoveTeamMember,
  handlePopCancel,
  hidePopConfirm,
  confirmLoading,
  setNodeMapLength,
}) => {
  const [show, setShow] = useState(true);
  const [mapState, setMapState] = useState(team.employees);
  const dispatch = useDispatch();

  const success = (text) => {
    message.success(text);
  };

  const handleRemoveTeamMember = (employee, teamFrom) => {
    const filter = teamFrom.employees.filter(
      (e) => e.id !== employee.id,
    );
    const updatedTeam = {
      teamName: teamFrom.teamName,
      id: teamFrom.id,
      // key: teamFrom.key,
      employees: filter,
      // tasks: teamFrom.tasks,
    };
    dispatch(allActions.teams.teamUpdated(updatedTeam));
    setMapState(updatedTeam.employees);
    setShow(true);
    success(
      `${employee.firstName} ${employee.lastName} removed from ${teamFrom.teamName}`,
    );
  };

  const teamList = () => {
    return mapState.map((e) => {
      return (
        <div key={e.id}>
          <TeamDetailListItem
            team={team}
            key={e.id}
            employee={e}
            setShowModal={setShowModal}
            handleRemoveTeamMember={handleRemoveTeamMember}
            handlePopCancel={handlePopCancel}
            hidePopConfirm={hidePopConfirm}
            confirmLoading={confirmLoading}
          />
        </div>
      );
    });
  };

  const nodeMap =
    mapState.length === 0 ? (
      <Result
        title={`${team.teamName} has no members.`}
        extra={
          <Button type="primary" key="console">
            {' '}
            Add Members{' '}
          </Button>
        }
      />
    ) : (
      teamList()
    );

  return (
    <QueueAnim key="nodeMap" type={['right', 'left']} leaveReverse>
      {nodeMap}
    </QueueAnim>
  );
};

export default TeamDetailList;

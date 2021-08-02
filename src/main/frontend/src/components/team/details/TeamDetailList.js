import React, { useState, lazy } from 'react';
import QueueAnim from 'rc-queue-anim';
import { useDispatch } from 'react-redux';
import { Result, Skeleton, message, List } from 'antd';
import api from '../../../apis/api';
import './TeamDetails.css';
import TeamDetailListItem from './TeamDetailListItem';
import allActions from '../../../redux/actions/index';
import { Suspense } from 'react';

// const TeamDetailListItem = lazy(() => import('./containers/TeamDetailListItem'));

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
    };
    setEmployeeState(updatedTeam.employees);
    dispatch(allActions.employees.employeeDeleted(employee.id));
    api.delete(`employees/${employee.id}`);
    success(`${employee.firstName} ${employee.lastName} removed from ${teamFrom.teamName}`);
  };

  const teamList = team.employees.map((e) => {
    return (
      <TeamDetailListItem
        team={team}
        key={e.id}
        employee={e}
        setShowModal={setShowModal}
        handleRemoveTeamMember={handleRemoveTeamMember}
      />
    );
  });

  // const teamListContainer =
  //   employeeState.length === 0 ? (
  //     <Result
  //       style={{ height: '-webkit-fit-content' }}
  //       key={team.teamName}
  //       title={`${team.teamName} has no members.`}
  //       extra={
  //         <Button type="primary" key="console">
  //           Add Members
  //         </Button>
  //       }
  //     />
  //   ) : (
  //     teamList()
  //   );

  return (
    <List>
      <Suspense fallback={<Skeleton />}>
        <QueueAnim key="nodeMap" type={['right', 'left']} leaveReverse>
          {teamList}
        </QueueAnim>
      </Suspense>
    </List>
  );
};

export default TeamDetailList;

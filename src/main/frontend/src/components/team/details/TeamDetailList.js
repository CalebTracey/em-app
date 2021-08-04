import React, { useState, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Skeleton, message } from 'antd';
import api from '../../../apis/api';
import './TeamDetails.css';
import allActions from '../../../redux/actions/index';
import { Suspense } from 'react';

const TeamDetailItemContainer = lazy(() => import('./containers/TeamDetailItemContainer'));

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

  return (
    <Suspense fallback={<Skeleton />}>
      <TeamDetailItemContainer
        team={team}
        employees={employeeState}
        setShowModal={setShowModal}
        handleRemoveTeamMember={handleRemoveTeamMember}
      />
    </Suspense>
  );
};

export default TeamDetailList;

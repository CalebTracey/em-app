/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import api from '../../../apis/api';
import './TeamDetails.css';
import allActions from '../../../redux/actions/index';
import TeamDetailItemContainer from './containers/TeamDetailItemContainer';

const TeamDetailList = ({ team, setShowModal }) => {
  const [employeeState, setEmployeeState] = useState(team.employees);
  const dispatch = useDispatch();

  const success = (text) => {
    message.success(text);
  };

  const handleRemoveTeamMember = (employee, teamFrom) => {
    const employeeFilter = teamFrom.employees.filter((e) => e.id !== employee.id);
    const filteredWithKey = employeeFilter.map((e) => {
      const emp = e;
      emp.key = e.id;
      return emp;
    });
    const updatedTeam = {
      teamName: teamFrom.teamName,
      id: teamFrom.id,
      employees: filteredWithKey,
    };
    setEmployeeState(updatedTeam.employees);
    dispatch(allActions.employees.employeeDeleted(employee.id));
    api.delete(`employees/${employee.id}`);
    success(`${employee.firstName} ${employee.lastName} removed from ${teamFrom.teamName}`);
  };

  return (
    <TeamDetailItemContainer
      team={team}
      employees={employeeState}
      setShowModal={setShowModal}
      handleRemoveTeamMember={handleRemoveTeamMember}
    />
  );
};

export default TeamDetailList;

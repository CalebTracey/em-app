import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDetailsCard from './EmployeeDetailsCard';

const EmployeeDetails = () => {
  const employee = useSelector((state) => state.employees.employeeSelected);
  const teams = useSelector((state) => state.teams.teamsData);

  return !employee ? (
    <Redirect to="/" />
  ) : (
    <div
      style={{
        margin: '5em',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <EmployeeDetailsCard employee={employee} teams={teams} />
    </div>
  );
};

export default EmployeeDetails;

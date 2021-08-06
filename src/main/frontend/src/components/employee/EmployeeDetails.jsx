import React from 'react';
import { PageHeader } from 'antd';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDetailsCard from './EmployeeDetailsCard';
import { useHistory } from 'react-router-dom';

const EmployeeDetails = () => {
  const employee = useSelector((state) => state.employees.employeeSelected);
  const teams = useSelector((state) => state.teams.teamData);
  const history = useHistory();

  return !employee ? (
    <Redirect to="/EMapp" />
  ) : (
    <>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => history.goBack()}
        title={employee.name}
      />
      <div
        style={{
          margin: '5em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <EmployeeDetailsCard employee={employee} teams={teams} />
      </div>
    </>
  );
};

export default EmployeeDetails;

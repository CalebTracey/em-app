import React from 'react';
import { PageHeader } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EmployeeDetailsCard from './EmployeeDetailsCard';
import EmployeeDetailsRedirect from './EmployeeDetailsRedirect';

const EmployeeDetails = () => {
  const employee = useSelector((state) => state.employees.employeeSelected);
  const teams = useSelector((state) => state.teams.teamData);
  const { id } = useParams();
  const history = useHistory();

  return !employee ? (
    // <Redirect to="/EMapp/employees/redirect" />
    <EmployeeDetailsRedirect id={id} />
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

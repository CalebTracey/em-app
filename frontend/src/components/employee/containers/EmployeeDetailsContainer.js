/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDetails from '../EmployeeDetails';
import EmployeeDetailsRedirect from '../EmployeeDetailsRedirect';

const EmployeeDetailsContainer = () => {
  const employee = useSelector((state) => state.employees.employeeSelected);
  const { id } = useParams();
  return !employee ? (
    <EmployeeDetailsRedirect id={id} />
  ) : (
    <EmployeeDetails employee={employee} data-testid="team-page" />
  );
};

export default EmployeeDetailsContainer;

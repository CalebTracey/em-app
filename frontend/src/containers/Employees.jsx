/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import EmployeeList from '../components/employee/EmployeeList';

const Employees = ({ employees }) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e !== null) {
      dispatch(allActions.employees.employeeSelected(e));
    }
  };

  return <EmployeeList employees={employees} clickHandler={clickHandler} />;
};
export default Employees;

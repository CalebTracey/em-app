import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../redux/actions/index';
import { Spin } from 'antd';

const EmployeeList = lazy(() => import('../components/employee/EmployeeList'));

export const Employees = () => {
  const employees = useSelector((state) => state.employees.employeeData);
  const dispatch = useDispatch();

  const clickHandler = (employees) => {
    if (employees !== null) {
      dispatch(allActions.employees.employeeSelected(employees));
    }
  };

  return (
    <Suspense fallback={<Spin />}>
      <EmployeeList employees={employees} clickHandler={clickHandler} />
    </Suspense>
  );
};
export default Employees;

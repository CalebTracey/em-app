import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import allActions from '../redux/actions/index';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
const EmployeeList = lazy(() => import('../components/employee/EmployeeList'));

export const Employees = () => {
  const employees = useSelector((state) => state.employees.employeeData);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e !== null) {
      dispatch(allActions.employees.employeeSelected(e));
    }
  };

  return (
    <Suspense
      fallback={
        <div className="skeleton">
          <Skeleton active paragraph={{ rows: 5 }} />
        </div>
      }
    >
      <EmployeeList employees={employees} clickHandler={clickHandler} />
    </Suspense>
  );
};
export default Employees;

import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../redux/actions/index';
// import EmployeeList from '../components/employee/EmployeeList';
import apiGet from '../apis/apiGet';
import { Spin } from 'antd';

const EmployeeList = lazy(() => import('../components/employee/EmployeeList'));

export const Employees = () => {
  const employees = useSelector((state) => state.employees.employeeData);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (employees.length === 0) {
  //     apiGet({
  //       url: 'employees',
  //       headers: null,
  //       data: null,
  //     }).then((res) => {
  //       const sort = res.data._embedded.employeeList.sort((a, b) =>
  //         a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
  //       );
  //       dispatch(allActions.employees.employeeData(sort));
  //     });
  //   }
  // }, [employees]);

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

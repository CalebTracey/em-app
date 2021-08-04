import React, { Suspense, lazy } from 'react';
import { Skeleton } from 'antd';
import './Employees.css';

const EmployeeDetailsCard = lazy(() => import('../EmployeeDetailsCard'));

const EmployeeDetailsCardContainer = ({ employee, teams }) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <EmployeeDetailsCard employee={employee} teams={teams} />
    </Suspense>
  );
};

export default EmployeeDetailsCardContainer;

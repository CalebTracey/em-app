import React, { Suspense, lazy } from 'react';
import SkeletonLoad from '../../../utils/SkeletonLoad';
import './Employees.css';

const EmployeeDetailsCard = lazy(() => import('../EmployeeDetailsCard'));

const EmployeeDetailsCardContainer = ({ employee, teams }) => {
  return (
    <Suspense fallback={<SkeletonLoad />}>
      <EmployeeDetailsCard employee={employee} teams={teams} />
    </Suspense>
  );
};

export default EmployeeDetailsCardContainer;

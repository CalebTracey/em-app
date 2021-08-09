import React, { Suspense, lazy } from 'react';
import { Skeleton, Space } from 'antd';
import './Employees.css';

const EmployeeDetailsCard = lazy(() => import('../EmployeeDetailsCard'));

const EmployeeDetailsCardContainer = ({ employee, teams }) => {
  return (
    <Suspense
      fallback={
        <Space style={{ margin: '2rem' }}>
          <Skeleton active paragraph={{ rows: 4 }} />
        </Space>
      }
    >
      <EmployeeDetailsCard employee={employee} teams={teams} />
    </Suspense>
  );
};

export default EmployeeDetailsCardContainer;

/* eslint-disable react/prop-types */
import React, { Suspense, lazy } from 'react';
import { Skeleton, Space } from 'antd';

const EmployeeDetailsCard = lazy(() => import('../EmployeeDetailsCard'));

const EmployeeDetailsCardContainer = ({ employee, teams }) => (
  <Suspense
    fallback={
      <Space style={{ margin: '2rem' }}>
        <div className="skeleton">
          <Skeleton active paragraph={{ rows: 5 }} />
        </div>
      </Space>
    }
  >
    <EmployeeDetailsCard employee={employee} teams={teams} />
  </Suspense>
);

export default EmployeeDetailsCardContainer;

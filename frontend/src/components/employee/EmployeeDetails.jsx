/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense } from 'react';
import { PageHeader, Space, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EmployeeDetailsRedirect from './EmployeeDetailsRedirect';

const EmployeeDetailsCard = lazy(() => import('./EmployeeDetailsCard'));

const EmployeeDetails = () => {
  const employee = useSelector((state) => state.employees.employeeSelected);
  const history = useHistory();
  const { id } = useParams();

  return !employee ? (
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
        <Suspense
          fallback={
            <Space style={{ margin: '2rem' }}>
              <div className="skeleton">
                <Skeleton active paragraph={{ rows: 5 }} />
              </div>
            </Space>
          }
        >
          <EmployeeDetailsCard employee={employee} />
        </Suspense>
      </div>
    </>
  );
};

export default EmployeeDetails;

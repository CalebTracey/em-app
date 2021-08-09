import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton, Space } from 'antd';

const DashboardPage = lazy(() => import('../components/dashboard/DashboardPage'));

const Dashboard = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const employees = useSelector((state) => state.employees.employeeData);
  const tasks = useSelector((state) => state.teams.teamTaskData);

  return (
    <Suspense
      fallback={
        <Space style={{ margin: '2rem' }}>
          <Skeleton active paragraph={{ rows: 4 }} />
        </Space>
      }
    >
      <DashboardPage teams={teams} employees={employees} tasks={tasks} />
    </Suspense>
  );
};

export default Dashboard;

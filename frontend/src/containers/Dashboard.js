import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';

const DashboardPage = lazy(() => import('../components/dashboard/DashboardPage'));

const Dashboard = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const employees = useSelector((state) => state.employees.employeeData);
  const tasks = useSelector((state) => state.teams.teamTaskData);

  return (
    <Suspense fallback={<Skeleton animated />}>
      <DashboardPage teams={teams} employees={employees} tasks={tasks} />
    </Suspense>
  );
};

export default Dashboard;

import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import SkeletonLoad from '../utils/SkeletonLoad';

const DashboardPage = lazy(() => import('../components/dashboard/DashboardPage'));

const Dashboard = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const employees = useSelector((state) => state.employees.employeeData);
  const tasks = useSelector((state) => state.teams.teamTaskData);

  return (
    <Suspense fallback={<SkeletonLoad />}>
      <DashboardPage teams={teams} employees={employees} tasks={tasks} />
    </Suspense>
  );
};

export default Dashboard;

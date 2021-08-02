import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
// const DashboardTeams = lazy(() => import('../components/dashboard-teams/DashboardTeams'));
import DashboardTeams from '../components/dashboard-teams/DashboardTeams';
const Dashboard = () => {
  const company = useSelector((state) => state.company);
  const teams = useSelector((state) => state.teams.teamData);
  const employees = useSelector((state) => state.employees.employeeData);

  return <DashboardTeams teams={teams} company={company} employees={employees} />;
};

export default Dashboard;

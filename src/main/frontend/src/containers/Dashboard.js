import React from 'react';
import { useSelector } from 'react-redux';
// const DashboardTeams = lazy(() => import('../components/dashboard-teams/DashboardTeams'));
import DashboardTeams from '../components/team/dashboard-teams/DashboardTeams';
const Dashboard = () => {
  const company = useSelector((state) => state.company);
  const teams = useSelector((state) => state.teams.teamData);
  const employees = useSelector((state) => state.employees.employeeData);

  return <DashboardTeams teams={teams} company={company} employees={employees} />;
};

export default Dashboard;

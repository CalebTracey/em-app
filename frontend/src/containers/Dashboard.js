import React from 'react';
import { useSelector } from 'react-redux';
import DashboardPage from '../components/dashboard/DashboardPage';

const Dashboard = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const employees = useSelector((state) => state.employees.employeeData);
  const tasks = useSelector((state) => state.teams.teamTaskData);

  return <DashboardPage teams={teams} employees={employees} tasks={tasks} />;
};

export default Dashboard;

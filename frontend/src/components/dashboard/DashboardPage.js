import React from 'react';
import DashboardTasksContainer from './dashboard tasks/DashboardTasksContainer';
import './Dashboard.css';
// const DashboardTeams = lazy(() => import('../components/dashboard-teams/DashboardTeams'));
import DashboardTeams from './dashboard teams/DashboardTeams';

const DashboardPage = ({ teams, company, employees, tasks }) => {
  const currentDate = new Date();

  return (
    <div className="wrapper">
      <div className="page-header">{currentDate.toLocaleDateString()}</div>
      <div className="dashboard">
        <DashboardTasksContainer tasks={tasks} currentDate={currentDate} />
        <DashboardTeams teams={teams} employees={employees} />
      </div>
    </div>
  );
};

export default DashboardPage;

/* eslint-disable react/prop-types */
import React from 'react';
import DashboardTasksContainer from './dashboard tasks/DashboardTasksContainer';
import './Dashboard.css';
import DashboardTeams from './dashboard teams/DashboardTeams';
import DashboardRoutes from './DashboardRoutes';

const DashboardPage = ({ teams, employees, tasks }) => {
  // const date = new Date('2021/09/05');
  const date = new Date();

  return (
    <div className="wrapper">
      <div className="page-header">{date.toLocaleDateString()}</div>
      <div className="dashboard">
        <DashboardTasksContainer tasks={tasks} date={date} />
        <DashboardRoutes date={date} tasks={tasks} />
        <DashboardTeams teams={teams} employees={employees} />
      </div>
    </div>
  );
};

export default DashboardPage;

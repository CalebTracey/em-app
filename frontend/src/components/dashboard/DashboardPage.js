import React from 'react';
import DashboardTasksContainer from './dashboard tasks/DashboardTasksContainer';
import './Dashboard.css';
import DashboardTeams from './dashboard teams/DashboardTeams';
import FullSchedule from '../task/calendar/FullSchedule';

const DashboardPage = ({ teams, company, employees, tasks }) => {
  const date = new Date();

  return (
    <div className="wrapper">
      <div className="page-header">{`${date.toLocaleDateString()}`}</div>
      <div className="dashboard">
        <DashboardTasksContainer tasks={tasks} currentDate={date} />
        <div className="calendar-container">
          <FullSchedule />
        </div>
        <DashboardTeams teams={teams} employees={employees} />
      </div>
    </div>
  );
};

export default DashboardPage;

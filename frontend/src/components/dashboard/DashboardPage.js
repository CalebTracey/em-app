/* eslint-disable react/prop-types */
import React from 'react';
import DashboardTasksContainer from './dashboard tasks/DashboardTasksContainer';
import './Dashboard.css';
import DashboardTeams from './dashboard teams/DashboardTeams';
import CalendarContainer from '../task/calendar/CalendarContainer';

const DashboardPage = ({ teams, employees, tasks }) => {
  // const date = new Date('2021/09/05');
  const date = new Date();

  return (
    <div className="wrapper">
      <div className="page-header">{date.toLocaleDateString()}</div>
      <div className="dashboard">
        <DashboardTasksContainer tasks={tasks} date={date} />
        <div className="calendar-container">
          <CalendarContainer date={date} />
        </div>
        <DashboardTeams teams={teams} employees={employees} />
      </div>
    </div>
  );
};

export default DashboardPage;

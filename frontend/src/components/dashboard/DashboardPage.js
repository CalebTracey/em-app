/* eslint-disable react/prop-types */
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import DashboardTasksContainer from './dashboard tasks/DashboardTasksContainer';
import DashboardTeams from './dashboard teams/DashboardTeams';
import { history } from '../../redux/store';
import CalendarContainer from '../task/calendar/CalendarContainer';

import './Dashboard.css';

const DashboardPage = ({ teams, employees, tasks }) => {
  const date = new Date();
  return (
    <ConnectedRouter history={history}>
      <div className="wrapper">
        <div className="page-header">{date.toLocaleDateString()}</div>
        <div className="dashboard">
          <DashboardTasksContainer tasks={tasks} date={date} />
          <CalendarContainer tasks={tasks} date={date} />
          <DashboardTeams teams={teams} employees={employees} />
        </div>
      </div>
    </ConnectedRouter>
  );
};

export default DashboardPage;

import React from 'react';
import './DashboardUpcomingTasks.css';
/* eslint-disable react/prop-types */

const DashboardUpcomingTasks = ({ tasks }) => (
  <div className="upcoming-tasks">
    <div className="main-text-wrapper">
      <p className="task-text-main">{tasks.length}</p>
    </div>
    <p className="task-text-sub">upcoming</p>
  </div>
);

export default DashboardUpcomingTasks;

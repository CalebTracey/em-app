/* eslint-disable react/prop-types */
import React from 'react';
import './DashboardUpcomingTasks.css';

const DashboardOverdueTasks = ({ tasks }) => (
  <div className="upcoming-tasks">
    <div className="main-text-wrapper overdue">
      <p className="task-text-main">{tasks.length}</p>
    </div>
    <p className="task-text-sub">past deadline</p>
  </div>
);

export default DashboardOverdueTasks;

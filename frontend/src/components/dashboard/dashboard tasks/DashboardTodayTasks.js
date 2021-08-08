import React from 'react';
import './DashboardUpcomingTasks.css';

const DashboardTodayTasks = ({ tasks }) => {
  return (
    <div className="upcoming-tasks">
      <div className="main-text-wrapper today">
        <p className="task-text-main">{tasks.length}</p>
      </div>
      <p className="task-text-sub">Due Today</p>
    </div>
  );
};

export default DashboardTodayTasks;

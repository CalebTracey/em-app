import React from 'react';
import './DashboardTasks.css';
import DashboardTasks from './DashboardTasks';

const DashboardTasksContainer = ({ tasks, currentDate }) => {
  const urgentTasks = tasks.filter(({ remaining }) => remaining < 10 && remaining > 0);

  const urgentFilter = urgentTasks.filter(
    ({ taskEnd }) => new Date(taskEnd).getMonth() === currentDate.getMonth()
  );

  return (
    <div className="task-container">
      <div className="title-text">Upcoming Tasks</div>
      <div className="dash-task-list-container">
        <DashboardTasks tasks={urgentFilter} />
      </div>
    </div>
  );
};

export default DashboardTasksContainer;

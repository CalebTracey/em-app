import React from 'react';
import './DashboardTasks.css';
import DashboardOverdueTasks from './DashboardOverdueTasks';
import DashboardUpcomingTasks from './DashboardUpcomingTasks';

const DashboardTasksContainer = ({ tasks, currentDate }) => {
  const urgentTasks = tasks.filter(({ remaining }) => remaining < 10 && remaining > 0);
  const overdueTasks = tasks.filter(({ remaining }) => remaining < 0);

  const urgentFilter = urgentTasks.filter(
    ({ taskEnd }) => new Date(taskEnd).getMonth() === currentDate.getMonth()
  );

  return (
    <div className="task-margin-container">
      <div className="task-container">
        <div className="task-title-text">Tasks</div>
        <DashboardUpcomingTasks tasks={urgentFilter} />
        <DashboardOverdueTasks tasks={overdueTasks} />
      </div>
    </div>
  );
};

export default DashboardTasksContainer;

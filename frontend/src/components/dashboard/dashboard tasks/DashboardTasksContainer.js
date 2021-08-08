import React from 'react';
import './DashboardTasks.css';
import DashboardOverdueTasks from './DashboardOverdueTasks';
import DashboardUpcomingTasks from './DashboardUpcomingTasks';
import DashboardTodayTasks from './DashboardTodayTasks';

const DashboardTasksContainer = ({ tasks, currentDate }) => {
  const urgentTasks = tasks.filter(({ remaining }) => remaining < 6 && remaining > 0);
  const overdueTasks = tasks.filter(({ remaining }) => remaining < 0);
  const todayTasks = tasks.filter(
    ({ taskEnd }) => new Date(taskEnd).toLocaleDateString() === currentDate.toLocaleDateString()
  );
  const urgentFilter = urgentTasks.filter(
    ({ taskEnd }) => new Date(taskEnd).getMonth() === currentDate.getMonth()
  );
  const overdueFilter = overdueTasks.filter(
    ({ taskEnd }) => new Date(taskEnd).getMonth() === currentDate.getMonth()
  );
  const todayFilter = todayTasks.filter(
    ({ taskEnd }) => new Date(taskEnd).getMonth() === currentDate.getMonth()
  );

  return (
    <div className="task-margin-container">
      <div className="task-container">
        <div className="task-title-text">Tasks</div>
        <DashboardOverdueTasks tasks={overdueFilter} />
        <DashboardTodayTasks tasks={todayFilter} />
        <DashboardUpcomingTasks tasks={urgentFilter} />
      </div>
    </div>
  );
};

export default DashboardTasksContainer;

import React from 'react';
import './DashboardTasks.css';
import DashboardOverdueTasks from './DashboardOverdueTasks';
import DashboardUpcomingTasks from './DashboardUpcomingTasks';
import DashboardTodayTasks from './DashboardTodayTasks';
/* eslint-disable react/prop-types */

const DashboardTasksContainer = ({ tasks }) => {
  const date = new Date();
  const urgentTasks = tasks.filter(({ remaining }) => remaining < 6 && remaining > 0);
  const overdueTasks = tasks.filter(({ remaining }) => remaining < 0);
  const todayTasks = tasks.filter(
    ({ taskEnd }) => new Date(taskEnd).toLocaleDateString() === date.toLocaleDateString()
  );
  // const urgentFilter = urgentTasks.filter(
  //   ({ taskEnd }) => new Date(taskEnd).getMonth() === date.getMonth()
  // );
  // const overdueFilter = overdueTasks.filter(
  //   ({ taskEnd }) => new Date(taskEnd).getMonth() === date.getMonth()
  // );
  // const todayFilter = todayTasks.filter(
  //   ({ taskEnd }) => new Date(taskEnd).getMonth() === date.getMonth()
  // );

  return (
    <div className="task-margin-container">
      <div className="task-container">
        <div className="task-title-text">Tasks</div>
        <DashboardOverdueTasks tasks={overdueTasks} />
        <DashboardTodayTasks tasks={todayTasks} />
        <DashboardUpcomingTasks tasks={urgentTasks} />
      </div>
    </div>
  );
};

export default DashboardTasksContainer;

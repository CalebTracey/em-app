/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../../redux/actions';
import './DashboardTasks.css';
import DashboardOverdueTasks from './DashboardOverdueTasks';
import DashboardUpcomingTasks from './DashboardUpcomingTasks';
import DashboardTodayTasks from './DashboardTodayTasks';

const DashboardTasksContainer = ({ tasks, setContent }) => {
  const date = new Date();
  const dispatch = useDispatch();
  const urgentTasks = tasks.filter(({ remaining }) => remaining < 6 && remaining > 0);
  const overdueTasks = tasks.filter(({ remaining }) => remaining < 0);
  const todayTasks = tasks.filter(
    ({ taskEnd }) => new Date(taskEnd).toLocaleDateString() === date.toLocaleDateString()
  );
  const todayFilter = todayTasks.filter(
    ({ taskEnd }) => new Date(taskEnd).getMonth() === date.getMonth()
  );

  const contentHandler = ({ dashboardTasks, content }) => {
    setContent(content);
    dispatch(allActions.tasks.dashboardTasks(dashboardTasks));
    // swap this for setContent
    // dispatch tasks
  };

  return (
    <div className="task-margin-container">
      <div className="task-container">
        <div className="task-title-text">Tasks</div>
        <DashboardOverdueTasks tasks={overdueTasks} contentHandler={contentHandler} />
        <DashboardTodayTasks tasks={todayFilter} contentHandler={contentHandler} />
        <DashboardUpcomingTasks tasks={urgentTasks} contentHandler={contentHandler} />
      </div>
    </div>
  );
};

export default DashboardTasksContainer;

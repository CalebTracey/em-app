/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import allActions from '../../../redux/actions';
import './DashboardUpcomingTasks.css';

const DashboardTodayTasks = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to="EMapp/tasks/overdue"
      onClick={() =>
        dispatch(allActions.tasks.dashboardTasks({ title: 'Tasks for Today', items: tasks }))
      }
    >
      <div className="upcoming-tasks">
        <div className="main-text-wrapper today">
          <p className="task-text-main">{tasks.length}</p>
        </div>
        <p className="task-text-sub">Due Today</p>
      </div>
    </Link>
  );
};

export default DashboardTodayTasks;

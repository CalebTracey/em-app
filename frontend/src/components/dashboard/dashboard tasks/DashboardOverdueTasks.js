/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import allActions from '../../../redux/actions';
import './DashboardUpcomingTasks.css';

const DashboardOverdueTasks = ({ tasks }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to="EMapp/tasks/overdue"
      onClick={() =>
        dispatch(allActions.tasks.dashboardTasks({ title: 'Overdue Tasks', items: tasks }))
      }
    >
      <div className="upcoming-tasks">
        <div className="main-text-wrapper overdue">
          <p className="task-text-main">{tasks.length}</p>
        </div>
        <p className="task-text-sub">past deadline</p>
      </div>
    </Link>
  );
};

export default DashboardOverdueTasks;

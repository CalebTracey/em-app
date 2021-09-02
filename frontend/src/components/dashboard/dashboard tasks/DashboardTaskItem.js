/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './DashboardTasks.css';
import allActions from '../../../redux/actions/index';

const DashboardTaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/EMapp/task/${task.id}`}
      onClick={() => dispatch(allActions.teams.teamTaskSelected(task))}
    >
      <div className="item container">
        {`Task #${task.id} Deadline: ${task.remaining} days. `}
        {`"${task.description}"`}
      </div>
    </Link>
  );
};

export default DashboardTaskItem;

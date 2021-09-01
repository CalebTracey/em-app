/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import React from 'react';
import { useDispatch } from 'react-redux';
import TaskListContainer from './TaskListContainer';
import allActions from '../../redux/actions/index';

const TaskListOverdue = ({ tasks }) => {
  const dispatch = useDispatch();
  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };

  return <TaskListContainer clickHandler={clickHandler} tasks={tasks} />;
};

export default TaskListOverdue;

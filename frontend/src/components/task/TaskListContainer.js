import React from 'react';
import { useDispatch } from 'react-redux';
import TaskList from './TaskList';
import allActions from '../../redux/actions/index';

// eslint-disable-next-line react/prop-types
const TaskListContainer = ({ tasks }) => {
  const dispatch = useDispatch();
  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };
  return <TaskList clickHandler={clickHandler} tasks={tasks} />;
};

export default TaskListContainer;

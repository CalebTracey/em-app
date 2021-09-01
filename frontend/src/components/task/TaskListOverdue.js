import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import allActions from '../../redux/actions/index';

// eslint-disable-next-line react/prop-types
const TaskListOverdue = () => {
  const overdueTasks = useSelector((state) => state.tasks.overdueTasks);
  const dispatch = useDispatch();
  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };
  return <TaskList clickHandler={clickHandler} tasks={overdueTasks} />;
};

export default TaskListOverdue;

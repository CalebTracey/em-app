/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import TaskList from '../components/task/TaskList';

const Schedule = ({ tasks }) => {
  const dispatch = useDispatch();

  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };
  return <TaskList clickHandler={clickHandler} tasks={tasks} />;
};

export default Schedule;

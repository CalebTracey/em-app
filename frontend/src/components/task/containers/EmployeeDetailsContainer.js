/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskDetails from '../TaskDetails';
import TaskDetailsRedirect from '../TaskDetailsRedirect';

const TaskDetailsContainer = () => {
  const task = useSelector((state) => state.teams.teamTaskSelected);
  const { id } = useParams();
  return !task ? (
    <TaskDetailsRedirect id={id} />
  ) : (
    <TaskDetails task={task} data-testid="team-page" />
  );
};

export default TaskDetailsContainer;

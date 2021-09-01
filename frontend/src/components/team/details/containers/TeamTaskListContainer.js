/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../TeamDetails.css';
import TeamTaskList from '../../tasks/TeamTaskList';

const TeamTaskListContainer = ({ team }) => {
  const tasks = team.teamTasks.map((task) => {
    const t = task;
    t.key = task.id;
    return t;
  });
  return <TeamTaskList tasks={tasks} />;
};

export default TeamTaskListContainer;

import React from 'react';
import TeamTaskList from './TeamTaskList';

const TeamTasks = ({ team }) => {
  console.log(team);
  return <TeamTaskList tasks={team.teamTasks} />;
};

export default TeamTasks;

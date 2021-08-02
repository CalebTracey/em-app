import React from 'react';
import '../TeamDetails.css';
import TeamTaskList from '../../tasks/TeamTaskList';

const TeamTaskListContainer = ({ team }) => {
  return <TeamTaskList tasks={team.teamTasks} />;
};

export default TeamTaskListContainer;

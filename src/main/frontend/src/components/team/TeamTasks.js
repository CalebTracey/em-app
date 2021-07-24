import React from 'react';
import TeamTaskList from './TeamTaskList';

const TeamTasks = ({ team }) => {
  return (
    <div style={{ paddingBottom: '16px' }}>
      <TeamTaskList tasks={team.tasks} />
    </div>
  );
};

export default TeamTasks;

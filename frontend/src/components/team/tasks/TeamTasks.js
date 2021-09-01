/* eslint-disable react/prop-types */
import React from 'react';
import TeamTaskList from './TeamTaskList';

const TeamTasks = ({ team }) => <TeamTaskList tasks={team.teamTasks} />;

export default TeamTasks;

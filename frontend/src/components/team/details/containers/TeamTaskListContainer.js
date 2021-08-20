import React from 'react';
import '../TeamDetails.css';
import TeamTaskList from '../../tasks/TeamTaskList';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
const TeamTaskListContainer = ({ team }) => <TeamTaskList tasks={team.teamTasks} />;

export default TeamTaskListContainer;

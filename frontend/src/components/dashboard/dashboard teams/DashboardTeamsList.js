/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import DashboardTeamsListItem from './DashboardTeamsListItem';

const DashboardTeamsList = ({ teams }) => {
  const teamLists = teams.map((team, teamIdx) => (
    <DashboardTeamsListItem key={teamIdx} team={team} />
  ));
  return <div className="task-container">{teamLists}</div>;
};

export default DashboardTeamsList;

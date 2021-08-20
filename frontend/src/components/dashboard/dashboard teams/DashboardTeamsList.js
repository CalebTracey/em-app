import React from 'react';
import DashboardTeamsListItem from './DashboardTeamsListItem';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const DashboardTeamsList = ({ teams }) => {
  const teamLists = teams.map((team, teamIdx) => (
    <DashboardTeamsListItem key={teamIdx} team={team} />
  ));
  return <div className="team-card-container">{teamLists}</div>;
};

export default DashboardTeamsList;

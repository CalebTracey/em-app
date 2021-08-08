import React from 'react';
import DashboardTeamsListItem from './DashboardTeamsListItem';

const DashboardTeamsList = ({ teams }) => {
  const teamLists = teams.map((team, teamIdx) => {
    return <DashboardTeamsListItem key={teamIdx} team={team} />;
  });
  return <div className="team-card-container">{teamLists}</div>;
};

export default DashboardTeamsList;

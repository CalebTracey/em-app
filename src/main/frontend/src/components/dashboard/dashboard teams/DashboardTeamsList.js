import { List } from 'antd';
import React from 'react';

import DashboardTeamsListItem from './DashboardTeamsListItem';

const DashboardTeamsList = ({ teams }) => {
  const teamLists = teams.map((team, teamIdx) => {
    return <DashboardTeamsListItem key={teamIdx} team={team} />;
  });

  return (
    <List size="small" grid={{ gutter: 16, column: 4 }}>
      {teamLists}
    </List>
  );
};

export default DashboardTeamsList;

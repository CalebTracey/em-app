import { List } from 'antd';
import React from 'react';

import DashboardTeamsListItem from './DashboardTeamsListItem';

const DashboardTeamsList = ({ teams, clickHandler }) => {
  const teamLists = teams.map((team, teamIdx) => {
    return <DashboardTeamsListItem key={teamIdx} team={team} clickHandler={clickHandler} />;
  });

  return (
    <List size="small" grid={{ gutter: 16, column: 4 }}>
      {teamLists}
    </List>
  );
};

export default DashboardTeamsList;

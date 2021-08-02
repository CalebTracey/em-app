import { List, Popover } from 'antd';
import React from 'react';
import DashboardTeamsListItem from './DashboardTeamsListItem';
import { Header } from 'antd/lib/layout/layout';
import { Suspense } from 'react';

const DashboardTeamsList = ({ teams, clickHandler }) => {
  const teamLists = teams.map((team, teamIdx) => {
    return <DashboardTeamsListItem key={teamIdx} team={team} clickHandler={clickHandler} />;
  });

  return (
    // <div style={{ marginRight: '10%', marginLeft: '10%' }}>
    /* <Header
        style={{
          height: '3em',
          margin: '1em',
          lineHeight: '3em',
          background: 'rgb(250, 250, 250)',
          padding: 0,
        }}
      ></Header> */

    <List size="small" style={{ height: '50%' }} grid={{ gutter: 16, column: 4 }}>
      {teamLists}
    </List>

    // </div>
  );
};

export default DashboardTeamsList;

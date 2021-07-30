import React from 'react';
import { Layout, Card } from 'antd';
import { DashboardTeamsList } from './DashboardTeamsList';

const DashboardTeams = ({ teams }) => {
  return <DashboardTeamsList teams={teams} />;
};
export default DashboardTeams;

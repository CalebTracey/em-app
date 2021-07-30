import { Button, Spin } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import DashboardTeams from './DashboardTeams';

const Dashboard = () => {
  const company = useSelector((state) => state.company);
  const teams = useSelector((state) => state.teams);
  const state = useSelector((state) => state.state);

  return (
    <Layout>
      <DashboardTeams teams={teams} />
    </Layout>
  );
};

export default Dashboard;

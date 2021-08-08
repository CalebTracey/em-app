import './DashboardTeams.css';
import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const DashboardTeamsList = lazy(() => import('./DashboardTeamsList'));

const DashboardTeams = ({ teams, employees }) => {
  return (
    <div className="teams-container">
      <div className="dash-team-list-container">
        <Suspense fallback={<Spin />}>
          <DashboardTeamsList teams={teams} employees={employees} />
        </Suspense>
      </div>
    </div>
  );
};
export default DashboardTeams;

/* eslint-disable react/prop-types */
import './DashboardTeams.css';
import React, { Suspense, lazy } from 'react';
import { Skeleton } from 'antd';

const DashboardTeamsList = lazy(() => import('./DashboardTeamsList'));

const DashboardTeams = ({ teams, employees }) => (
  <div className="teams-container">
    <div className="dash-team-list-container">
      <Suspense
        fallback={
          <div className="skeleton">
            <Skeleton active paragraph={{ rows: 5 }} />
          </div>
        }
      >
        <DashboardTeamsList teams={teams} employees={employees} />
      </Suspense>
    </div>
  </div>
);
export default DashboardTeams;

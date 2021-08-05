import './DashboardTeams.css';
import React, { useState, Suspense, lazy } from 'react';
import { Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

// import DashboardTeamsList from './DashboardTeamsList';
const DashboardTeamsList = lazy(() => import('./DashboardTeamsList'));
const DashboardTeams = ({ teams, employees, clickHandler }) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (teams.length > 14) {
      setHasMore(false);
      setLoading(false);
      return;
    }
  };

  return (
    <div className="teams-container">
      <div className="title-text">Teams</div>

      <div style={{}} className="dash-team-list-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <Suspense fallback={<Spin />}>
            <DashboardTeamsList teams={teams} employees={employees} clickHandler={clickHandler} />
          </Suspense>
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default DashboardTeams;

import React, { useState, Suspense, lazy } from 'react';
import { Spin } from 'antd';
import '../team/details/TeamDetails.css';
import InfiniteScroll from 'react-infinite-scroller';

// import DashboardTeamsList from './DashboardTeamsList';
const DashboardTeamsList = lazy(() => import('./DashboardTeamsList'));
const DashboardTeams = ({ teams, company, employees, clickHandler }) => {
  const [, setShowModal] = useState(0);
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
    <div
      style={{
        boxShadow: '0 0 2.5em -2em',
        position: 'fixed',
        right: '1em',
        width: '15%',
        minWidth: '15em',
        padding: 0,
        height: '52em',
        margin: '3em',
      }}
      className="demo-infinite-container"
    >
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
  );
};
export default DashboardTeams;

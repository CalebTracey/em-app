import React, { useState, lazy } from 'react';
import { Badge, Spin } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import InfiniteScroll from 'react-infinite-scroller';
import '../TeamDetails.css';
import { Suspense } from 'react';

const TeamDetailList = lazy(() => import('../TeamDetailList'));

const TeamDetailListContainer = ({ team }) => {
  const [, setShowModal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [titleBadge, setTitleBadge] = useState(0);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (team.employees.length > 14) {
      setHasMore(false);
      setLoading(false);
      return;
    }
  };

  return (
    <>
      <div style={{ marginRight: '10%', marginLeft: '10%' }}>
        <Header
          style={{
            height: '32px',
            margin: '10px',
            lineHeight: '32px',
            background: 'rgb(250, 250, 250)',
            padding: '0px',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>
            {'Team Members '} <Badge className="team-badge" count={team.employees.length} />
          </div>
        </Header>
        <div className="demo-infinite-container">
          <Suspense fallback={<Spin />}>
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={handleInfiniteOnLoad}
              hasMore={!loading && hasMore}
              useWindow={false}
            >
              <TeamDetailList key={team.id} team={team} setShowModal={setShowModal} />
            </InfiniteScroll>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default TeamDetailListContainer;

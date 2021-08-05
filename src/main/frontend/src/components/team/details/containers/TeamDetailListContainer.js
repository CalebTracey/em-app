import React, { useState, lazy } from 'react';
import { Spin, Result, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import '../TeamDetails.css';
import { Suspense } from 'react';

const TeamDetailList = lazy(() => import('../TeamDetailList'));

const TeamDetailListContainer = ({ team }) => {
  const [, setShowModal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (team.employees.length > 14) {
      setHasMore(false);
      setLoading(false);
      return;
    }
  };

  return team.employees.length === 0 ? (
    <Result
      style={{ height: '-webkit-fit-content' }}
      key={team.teamName}
      title={`${team.teamName} has no members.`}
      extra={
        <Button type="primary" key="console">
          Add Members
        </Button>
      }
    />
  ) : (
    <div
      className="team-detail-wrapper"
      style={{
        // padding: '1rem',
        // marginRight: '10%',
        // marginLeft: '10%',
        // display: 'flex',
        boxShadow: '0 0 2.25em -2em',
      }}
    >
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
  );
};

export default TeamDetailListContainer;

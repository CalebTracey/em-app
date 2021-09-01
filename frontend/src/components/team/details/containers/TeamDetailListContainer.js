/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState, lazy, Suspense } from 'react';
import { Skeleton, Result, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import '../TeamDetails.css';

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
        boxShadow: '0 0 2.25em -2em',
      }}
    >
      <Suspense
        fallback={
          <div className="skeleton">
            <Skeleton active paragraph={{ rows: 5 }} />
          </div>
        }
      >
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <TeamDetailList team={team} setShowModal={setShowModal} />
        </InfiniteScroll>
      </Suspense>
    </div>
  );
};

export default TeamDetailListContainer;

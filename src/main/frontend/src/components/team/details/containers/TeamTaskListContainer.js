import React, { useState } from 'react';
import { Badge } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import '../TeamDetails.css';
import TeamTaskList from '../../tasks/TeamTaskList';

const TeamTaskListContainer = ({ team }) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [, setShowModal] = useState(0);

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
            {'Current Tasks '} <Badge className="team-badge" count={team.teamTasks.length} />
          </div>
        </Header>
        {/* <div className="demo-infinite-container" style={{ height: 'fit-content' }}> */}
        <TeamTaskList tasks={team.teamTasks} />
        {/* </div> */}
      </div>
    </>
  );
};

export default TeamTaskListContainer;

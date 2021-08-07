import React from 'react';
import { Result, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const TeamDeletedPage = () => {
  const history = useHistory();
  const teamDeleted = useSelector((state) => state.teams.teamSelected);

  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <>
      <Result
        status="success"
        title={`Successfully deleted ${teamDeleted.teamName}`}
        size="large"
        // subTitle=""
        extra={[
          <Button type="primary" key="console" onClick={() => handleClick('/')}>
            Home
          </Button>,
        ]}
      />
    </>
  );
};

export default TeamDeletedPage;

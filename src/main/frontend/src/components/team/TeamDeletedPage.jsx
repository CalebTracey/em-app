import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const TeamDeletedPage = (teamName) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <Result
      status="success"
      title={`Successfully deleted ${teamName}`}
      size="large"
      // subTitle=""
      extra={[
        <Button type="primary" key="console" onClick={() => handleClick('/')}>
          Home
        </Button>,
      ]}
    />
  );
};

export default TeamDeletedPage;

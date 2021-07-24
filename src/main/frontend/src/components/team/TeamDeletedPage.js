import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const TeamDeletedPage = ({ teamName }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <Result
      status="success"
      title={`Successfully deleted ${teamName}`}
      size="large"
      //subTitle=""
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => handleClick('/dashboard')}
        >
          Home
        </Button>,
        // <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};

export default TeamDeletedPage;

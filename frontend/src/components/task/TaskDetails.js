/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TaskDetailsRedirect from './TaskDetailsRedirect';
import TaskDetailsCard from './TaskDetailsCard';

const TaskDetails = ({ task }) => {
  const [reroute, setReroute] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (task && parseInt(id, 10) !== task.id) {
      setReroute(true);
    }
    return () => setReroute(false);
  }, [task, id]);

  return !reroute ? (
    <>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => history.goBack()}
        title={`Task #${task.id}`}
      />
      <div
        style={{
          margin: '5em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TaskDetailsCard task={task} />
      </div>
    </>
  ) : (
    <TaskDetailsRedirect id={id} />
  );
};

export default TaskDetails;

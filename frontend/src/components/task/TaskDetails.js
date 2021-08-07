import { Skeleton, PageHeader } from 'antd';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import TaskDetailsCard from './TaskDetailsCard';

const TaskDetails = () => {
  const task = useSelector((state) => state.teams.teamTaskSelected);
  const history = useHistory();
  return !task ? (
    <Redirect to="/EMapp" />
  ) : (
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
        <Suspense fallback={<Skeleton />}>
          <TaskDetailsCard task={task} />
        </Suspense>
      </div>
    </>
  );
};

export default TaskDetails;

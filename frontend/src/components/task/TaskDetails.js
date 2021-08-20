import { PageHeader, Skeleton, Space } from 'antd';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import TaskDetailsCard from './TaskDetailsCard';
import TaskDetailsRedirect from './TaskDetailsRedirect';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const TaskDetails = () => {
  const task = useSelector((state) => state.teams.teamTaskSelected);
  const history = useHistory();
  const { id } = useParams();
  return !task ? (
    <TaskDetailsRedirect id={id} />
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
        <Suspense
          fallback={
            <Space style={{ margin: '2rem' }}>
              <div className="skeleton">
                <Skeleton active paragraph={{ rows: 5 }} />
              </div>
            </Space>
          }
        >
          <TaskDetailsCard task={task} />
        </Suspense>
      </div>
    </>
  );
};

export default TaskDetails;

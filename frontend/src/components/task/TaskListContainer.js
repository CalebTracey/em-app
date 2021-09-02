/* eslint-disable react/prop-types */
import React from 'react';
import { PageHeader } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import TaskDetailsCard from './TaskDetailsCard';

// eslint-disable-next-line react/prop-types
const TaskListContainer = () => {
  const history = useHistory();
  const tasks = useSelector((state) => state.tasks.dashboardTasks);
  const listNode = tasks.items.map((task) => (
    <div style={{ margin: '1rem' }}>
      <TaskDetailsCard task={task} />
    </div>
  ));
  return tasks.title !== '' ? (
    <div style={{ display: 'flex', height: '100%' }}>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => history.goBack()}
        title={tasks.title}
      />
      <div
        style={{
          margin: '5em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="margin-container">
            <div className="scroll-container">{listNode}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/EMapp" />
  );
};

export default TaskListContainer;

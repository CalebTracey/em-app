/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { PageHeader, Skeleton, Space } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import apiGet from '../../apis/apiGet';
import TaskDetailsRedirect from './TaskDetailsRedirect';
import allActions from '../../redux/actions/index';

const TaskDetailsCard = lazy(() => import('./TaskDetailsCard'));

const TaskDetails = () => {
  const task = useSelector((state) => state.teams.teamTaskSelected);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    apiGet({ url: `team_tasks/${parseInt(id, 10)}` }).then((res) => {
      dispatch(allActions.teams.teamTaskSelected(res.data));
    });
  }, [id, dispatch]);

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

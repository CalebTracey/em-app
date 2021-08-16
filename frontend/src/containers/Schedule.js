import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton } from 'antd';
import allActions from '../redux/actions/index';
import TaskList from '../components/task/TaskList';

const Schedule = () => {
  const taskState = useSelector((state) => state.teams.teamTaskData);
  const dispatch = useDispatch();

  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };
  return (
    <Suspense
      fallback={
        <div className="skeleton">
          <Skeleton active paragraph={{ rows: 5 }} />
        </div>
      }
    >
      <TaskList clickHandler={clickHandler} tasks={taskState} />
    </Suspense>
  );
};

export default Schedule;

/* eslint-disable react/prop-types */
import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Skeleton } from 'antd';
import allActions from '../redux/actions/index';
import TaskList from '../components/task/TaskList';

const Schedule = ({ tasks }) => {
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
      <TaskList clickHandler={clickHandler} tasks={tasks} />
    </Suspense>
  );
};

export default Schedule;

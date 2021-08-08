import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
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
    <Suspense fallback={<Spin />}>
      <TaskList clickHandler={clickHandler} tasks={taskState} />
    </Suspense>
  );
};

export default Schedule;

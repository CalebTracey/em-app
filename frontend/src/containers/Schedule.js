import React, { useEffect, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import allActions from '../redux/actions/index';
import TaskList from '../components/task/TaskList';
import useGetTeamTasks from '../hooks/useGetTeamTasks';

const Schedule = () => {
  // const teams = useSelector((state) => state.teams.teamData);
  const taskState = useSelector((state) => state.teams.teamTaskData);
  const dispatch = useDispatch();

  // const [result, getTeamTasks] = useGetTeamTasks({
  //   url: 'team_tasks',
  //   data: null,
  // });

  // useEffect(() => {
  //   if (taskState.length === 0) {
  //     getTeamTasks();
  //   }
  //   if (taskState.length !== 0) {
  //     setIsLoading(false);
  //   }
  // }, [getTeamTasks, taskState]);

  // useEffect(() => {
  //   if (teams) {
  //     const totalTasks = teams.map((team) => {
  //       return team.teamTasks;
  //     });
  //     // console.log(taskArray);
  //     const tasksReduced = totalTasks.reduce((total, amount) => {
  //       return total.concat(amount);
  //     });
  //     setTasks(tasksReduced);
  //     dispatch(allActions.teams.teamTaskData(tasks));
  //   }

  //   return () => setIsLoading(false);
  // }, [teams, tasks, dispatch]);

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

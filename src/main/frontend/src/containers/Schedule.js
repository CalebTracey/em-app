import React, { useEffect, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import allActions from '../redux/actions/index';
import apiGet from '../apis/apiGet';
import ScheduleList from '../components/schedule/ScheduleList';

const Schedule = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teams) {
      teams.map((team) => {
        return setTasks([...tasks, team.teamTasks]);
      });
    }
  }, [teams, setTasks, tasks]);

  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };
  return (
    <Suspense fallback={<Spin />}>
      <ScheduleList clickHandler={clickHandler} />
    </Suspense>
  );
};

export default Schedule;

/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import allActions from '../../../redux/actions/index';
import DashboardTeamsItemCard from './DashboardTeamsItemCard';

const DashboardTeamsListItem = ({ team }) => {
  const [taskArr, setTaskArr] = useState([]);
  const [taskNameArr, setTaskNameArr] = useState([]);

  useEffect(() => {
    if (team.teamTasks !== undefined) {
      setTaskArr(team.teamTasks);
    }
  }, [taskArr, taskNameArr, setTaskNameArr, team]);

  const dispatch = useDispatch();
  return (
    <Link
      to={`/EMapp/team/${team.id}`}
      onClick={() => dispatch(allActions.teams.teamSelected(team))}
    >
      <DashboardTeamsItemCard team={team} tasks={taskArr} />
    </Link>
  );
};

export default DashboardTeamsListItem;

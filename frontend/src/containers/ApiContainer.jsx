import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetEmployees from '../hooks/useGetEmployees';
import useGetTeams from '../hooks/useGetTeams';
import Dashboard from './Dashboard';
import allActions from '../redux/actions/index';
import TaskList from '../components/task/TaskList';
import useGetTeamTasks from '../hooks/useGetTeamTasks';

const ApiContainer = () => {
  const employeeState = useSelector((state) => state.employees.employeeData);
  const teamState = useSelector((state) => state.teams.teamData);
  const taskState = useSelector((state) => state.teams.teamTaskData);
  const [isLoading, setIsLoading] = useState(true);

  const [employeeRes, getEmployees] = useGetEmployees({
    url: 'employees',
    data: null,
  });
  const [teamRes, getTeams] = useGetTeams({
    url: 'teams',
    data: null,
  });

  const [result, getTeamTasks] = useGetTeamTasks({
    url: 'team_tasks',
    data: null,
  });

  useEffect(() => {
    if (employeeState.length === 0) {
      getEmployees();
    }
    if (teamState.length === 0) {
      getTeams();
    }
    if (taskState.length === 0) {
      getTeamTasks();
    }
    if (taskState.length !== 0) {
      setIsLoading(false);
    }
  }, [employeeState, getEmployees, teamState, getTeams, getTeamTasks, taskState]);

  return isLoading ? <Skeleton active rows={4} /> : <Dashboard />;
};

export default ApiContainer;

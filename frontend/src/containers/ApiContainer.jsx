import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import useGetEmployees from '../hooks/useGetEmployees';
import useGetTeams from '../hooks/useGetTeams';
import useGetTeamTasks from '../hooks/useGetTeamTasks';

const ApiContainer = () => {
  const employeeState = useSelector((state) => state.employees.employeeData);
  const teamState = useSelector((state) => state.teams.teamData);
  const taskState = useSelector((state) => state.teams.teamTaskData);
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });

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

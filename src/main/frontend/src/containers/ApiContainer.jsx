import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetEmployees from '../hooks/useGetEmployees';
import useGetTeams from '../hooks/useGetTeams';
import Dashboard from './Dashboard';
import allActions from '../redux/actions/index';

const ApiContainer = () => {
  const employeeState = useSelector((state) => state.employees.employeeData);
  const teamState = useSelector((state) => state.teams.teamData);

  const [employeeRes, getEmployees] = useGetEmployees({
    url: 'employees',
    data: null,
  });
  const [teamRes, getTeams] = useGetTeams({
    url: 'teams',
    data: null,
  });

  useEffect(() => {
    if (employeeState.length === 0) {
      getEmployees();
    }
    if (teamState.length === 0) {
      getTeams();
    }
  }, [employeeState, getEmployees, teamState, getTeams]);

  return employeeRes.isLoading || teamRes.isLoading ? <Skeleton active rows={4} /> : <Dashboard />;
};

export default ApiContainer;

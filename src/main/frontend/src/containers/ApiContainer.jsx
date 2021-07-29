import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useGetEmployees from '../hooks/useGetEmployees';
import useGetTeams from '../hooks/useGetTeams';
import Dashboard from '../layout/dashboard/Dashboard';

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

  return <Dashboard />;
};

export default ApiContainer;

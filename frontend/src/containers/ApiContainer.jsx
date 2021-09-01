import { Skeleton, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import useGetEmployees from '../hooks/useGetEmployees';
import useGetTeams from '../hooks/useGetTeams';
import useGetTeamTasks from '../hooks/useGetTeamTasks';

const ApiContainer = () => {
  const employeeState = useSelector((state) => state.employees.employeeData);
  const [fetched, setFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });

  useEffect(() => {
    const getData = () => {
      setFetched(true);
      getEmployees();
      getTeams();
      getTeamTasks();
    };
    if (employeeState.length === 0 && !fetched) {
      getData();
    }
    if (employeeState.length !== 0) {
      setIsLoading(false);
    }
  }, [employeeState, getEmployees, getTeams, getTeamTasks, fetched]);

  return isLoading ? (
    <Space style={{ margin: '2rem' }}>
      <div className="skeleton">
        <Skeleton active paragraph={{ rows: 5 }} />
      </div>
    </Space>
  ) : (
    <Dashboard />
  );
};

export default ApiContainer;

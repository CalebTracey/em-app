import { Skeleton, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import useGetEmployees from '../hooks/useGetEmployees';
import useGetTeams from '../hooks/useGetTeams';
import useGetTeamTasks from '../hooks/useGetTeamTasks';

const ApiContainer = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const [fetched, setFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });

  useEffect(() => {
    const getData = () => {
      getEmployees();
      getTeams();
      getTeamTasks();
      setFetched(true);
    };
    if (teams.length === 0 && !fetched) {
      getData();
    }
    if (teams.length !== 0) {
      setIsLoading(false);
    }
  }, [teams, getEmployees, getTeams, getTeamTasks, fetched]);

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

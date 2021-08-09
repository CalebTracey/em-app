import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Skeleton, Space } from 'antd';
import allActions from '../../redux/actions/index';
import apiGet from '../../apis/apiGet';
import useGetEmployees from '../../hooks/useGetEmployees';
import useGetTeams from '../../hooks/useGetTeams';
import useGetTeamTasks from '../../hooks/useGetTeamTasks';

const TeamPageRedirect = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });
  const dispatch = useDispatch();

  useEffect(() => {
    apiGet({ url: `teams/${id}` }).then((res) => {
      const teamData = res.data;
      dispatch(allActions.teams.teamSelected(teamData));
      setIsLoading(false);
    });
    getTeams();
    getEmployees();
    getTeamTasks();
  }, [id, getTeams, dispatch, getEmployees, getTeamTasks]);

  return isLoading ? (
    <Space style={{ margin: '2rem' }}>
      <Skeleton active paragraph={{ rows: 4 }} />
    </Space>
  ) : (
    <Redirect to={`/EMapp/teams/${id}`} />
  );
};

export default TeamPageRedirect;

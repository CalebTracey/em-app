import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Skeleton, Space } from 'antd';
import allActions from '../../redux/actions/index';
import apiGet from '../../apis/apiGet';
import useGetEmployees from '../../hooks/useGetEmployees';
import useGetTeams from '../../hooks/useGetTeams';
import useGetTeamTasks from '../../hooks/useGetTeamTasks';

const TaskDetailsRedirect = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });
  const dispatch = useDispatch();

  useEffect(() => {
    apiGet({ url: `team_tasks/${parseInt(id)}` }).then((res) => {
      const teamTaskData = res.data;
      dispatch(allActions.teams.teamTaskSelected(teamTaskData));
      setIsLoading(false);
    });
    getTeams();
    getEmployees();
    getTeamTasks();
  }, [id, getTeams, dispatch, getEmployees, getTeamTasks]);

  return isLoading ? (
    <Space style={{ margin: '2rem' }}>
      <div className="skeleton">
        <Skeleton active paragraph={{ rows: 5 }} />
      </div>
    </Space>
  ) : (
    <Redirect to={`/EMapp/task/${id}`} />
  );
};

export default TaskDetailsRedirect;

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton, Space } from 'antd';
import { Redirect } from 'react-router-dom';
import allActions from '../../redux/actions/index';
import apiGet from '../../apis/apiGet';
import useGetEmployees from '../../hooks/useGetEmployees';
import useGetTeams from '../../hooks/useGetTeams';
import useGetTeamTasks from '../../hooks/useGetTeamTasks';

const EmployeeDetailsRedirect = ({ id }) => {
  const teams = useSelector((state) => state.teams.teamData);
  const [isLoading, setIsLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });
  const dispatch = useDispatch();

  useEffect(() => {
    const ac = new AbortController();
    apiGet({ url: `employees/${parseInt(id, 10)}` })
      .then((res) => {
        const employeeData = res.data;
        dispatch(allActions.employees.employeeSelected(employeeData));
        setIsLoading(false);
      })
      .then(() => {
        getTeams();
        getEmployees();
        getTeamTasks();
      });
    return () => ac.abort();
  }, [id, getTeams, dispatch, getEmployees, getTeamTasks, isLoading]);

  useEffect(() => {
    const ac = new AbortController();
    if (teams.length !== 0) setCompleted(true);
    return () => ac.abort();
  }, [setCompleted, teams]);

  return completed ? (
    <Space style={{ margin: '2rem' }}>
      <div className="skeleton">
        <Skeleton active paragraph={{ rows: 5 }} />
      </div>
    </Space>
  ) : (
    <Redirect to={`/EMapp/employees/${id}`} />
  );
};

export default EmployeeDetailsRedirect;

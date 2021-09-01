/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Skeleton, Space } from 'antd';
import { Redirect } from 'react-router-dom';
import allActions from '../../redux/actions/index';
import apiGet from '../../apis/apiGet';
import useGetEmployees from '../../hooks/useGetEmployees';
import useGetTeams from '../../hooks/useGetTeams';
import useGetTeamTasks from '../../hooks/useGetTeamTasks';

const EmployeeDetailsRedirect = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [teamsRes, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      apiGet({ url: `employees/${parseInt(id, 10)}` })
        .then((res) => {
          dispatch(allActions.employees.employeeSelected(res.data));
        })
        .then(() => {
          getTeams();
          getEmployees();
          getTeamTasks();
        });
    };
    if (!teamsRes.isLoading) getData();
    return () => {
      setIsLoading(false);
    };
  }, [id, dispatch, getTeams, getEmployees, getTeamTasks, teamsRes]);

  return !isLoading ? (
    <Redirect to={`/EMapp/employees/${id}`} />
  ) : (
    <Space style={{ margin: '2rem' }}>
      <div className="skeleton">
        <Skeleton active paragraph={{ rows: 5 }} />
      </div>
    </Space>
  );
};

export default EmployeeDetailsRedirect;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Skeleton } from 'antd';
import allActions from '../../redux/actions/index';
import apiGet from '../../apis/apiGet';
import EmployeeDetails from './EmployeeDetails';
import useGetEmployees from '../../hooks/useGetEmployees';
import useGetTeams from '../../hooks/useGetTeams';
import useGetTeamTasks from '../../hooks/useGetTeamTasks';

const EmployeeDetailsRedirect = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [, getEmployees] = useGetEmployees({ data: null });
  const [, getTeams] = useGetTeams({ data: null });
  const [, getTeamTasks] = useGetTeamTasks({ data: null });
  const dispatch = useDispatch();

  useEffect(() => {
    apiGet({ url: `${parseInt(id)}` }).then((res) => {
      const employeeData = res.data;
      dispatch(allActions.employees.employeeSelected(employeeData));
      setIsLoading(false);
    });
    getTeams();
    getEmployees();
    getTeamTasks();
  }, [id, getTeams, dispatch, getEmployees, getTeamTasks]);

  return isLoading ? <Skeleton /> : <EmployeeDetails />;
};

export default EmployeeDetailsRedirect;

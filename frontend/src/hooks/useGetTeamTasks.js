/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import apiGet from '../apis/apiGet';

const useGetTeamTasks = ({ data }) => {
  const dispatch = useDispatch();
  const [taskRes, setResult] = useState({
    data: null,
    error: null,
    isLoading: false,
  });
  const getTeamTasks = useCallback(() => {
    const ac = new AbortController();
    setResult((prevState) => ({ ...prevState, isLoading: true }));
    apiGet(
      {
        url: 'team_tasks',
      },
      data,
      { ac }
    )
      .then((res) => {
        const sort = res.data._embedded.team_tasks.sort((a, b) =>
          a.taskEnd > b.taskEnd ? 1 : b.taskEnd > a.taskEnd ? -1 : 0
        );
        setResult({ data: sort, isLoading: false, error: null });
        dispatch(allActions.teams.teamTaskData(sort));
      })
      .catch((error) => {
        setResult({ data: null, isLoading: false, error });
      });
    return () => ac.abort();
  }, [data, dispatch]);

  return [taskRes, getTeamTasks];
};
export default useGetTeamTasks;

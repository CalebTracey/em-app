/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import apiGet from '../apis/apiGet';

const useGetTeams = ({ data }) => {
  const dispatch = useDispatch();
  const [teamsRes, setResult] = useState({
    data: null,
    error: null,
    isLoading: false,
  });
  const getTeams = useCallback(() => {
    const ac = new AbortController();
    setResult((prevState) => ({ ...prevState, isLoading: true }));
    apiGet(
      {
        url: 'teams',
      },
      data,
      { ac }
    )
      .then((res) => {
        const sort = res.data._embedded.teams.sort((a, b) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        setResult({ data: sort, isLoading: false, error: null });
        dispatch(allActions.teams.teamData(sort));
      })
      .catch((error) => {
        setResult({ data: null, isLoading: false, error });
      });
    return () => ac.abort();
  }, [data, dispatch]);

  return [teamsRes, getTeams];
};
export default useGetTeams;

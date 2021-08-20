import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import apiPut from '../apis/apiPut';
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const useGetTeams = ({ url, data }) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState({
    data: null,
    error: null,
    isLoading: false,
  });
  const putTeam = useCallback(() => {
    setResult((prevState) => ({ ...prevState, isLoading: true }));
    apiPut({
      url,
      data,
    })
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
  }, [url, data, dispatch]);

  return [result, putTeam];
};
export default useGetTeams;

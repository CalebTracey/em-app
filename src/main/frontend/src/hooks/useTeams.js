import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import allActions from '../redux/actions/index';
import api from '../api';

const useTeams = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teams.length > 0) {
      return;
    }

    const getTeams = async () => {
      if (teams.length === 0) {
        await api
          .get('api/v1/teams', null)
          .then((res) => {
            dispatch(
              allActions.teams.teamData(res.data._embedded.teamList),
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    getTeams();
  }, [teams, dispatch]);
};
export default useTeams;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import allActions from '../redux/actions/index';
import axios from 'axios'
import api from '../api';

axios.defaults.baseURL = 'http://localhost:8080/';

export const useAxios = (axiosParams) => {
  // const teams = useSelector(state => state.teams.teamData);
  // const dispatch = useDispatch();
  const [data, setData] = useState(null);

  // useEffect(() => {
  const getTeams = async () => {
    if (data === null) {
      await axios.request(axiosParams)
        .then(res => {
          setData(res.data._embedded);
        }).catch(function (error) {
          console.log(error);
        });
    }
    console.log(data)

    // }
  }
  useEffect(() => {
    getTeams(axiosParams);
  }, []);

  // }, [])

  return data;
};

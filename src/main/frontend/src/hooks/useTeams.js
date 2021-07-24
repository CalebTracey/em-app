import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import TeamList from '../components/team/TeamList';
import allActions from '../redux/actions/index';
import api from '../api';

const useTeams = () => {
    const teams = useSelector(state => state.teams.teamData);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getTeams = async () => {
            if (teams.length === 0 && data === null) {
                await api.get('api/v1/teams', null
                ).then(res => {
                    setData(res.data._embedded.teamList);
                }).catch((error) => {
                    console.log(error);
                });
            }
            if (data !== null) {
                dispatch(allActions.teams.teamData(data));
            }
        }
        getTeams();
    }, [teams, dispatch, data])
}
export default useTeams;
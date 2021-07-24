import React, { lazy, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import allActions from '../redux/actions/index';
import useTeams from '../hooks/useTeams';

const TeamList = lazy(() => import('../components/team/TeamList'));

const Teams = () => {
    const teams = useSelector(state => state.teams.teamData);
    const dispatch = useDispatch();

    useTeams();

    useEffect(() => {
        if (teams) {
        }
    }, [teams])

    const clickHandler = (team) => {
        if (team !== null) {
            dispatch(allActions.teams.teamSelected(team))
        }
    }
    return (
        <Suspense fallback={<div><Spin /></div>}>
            <TeamList
                key="team-list"
                teams={teams}
                clickHandler={clickHandler}
            />
            </Suspense>
    );
}

export default Teams;
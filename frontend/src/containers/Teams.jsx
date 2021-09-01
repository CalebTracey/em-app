/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/index';
import TeamList from '../components/team/TeamList';

const Teams = ({ teams }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.teams.teamData(teams));
  }, [teams, dispatch]);

  const clickHandler = (newTeam) => {
    if (newTeam !== null) {
      dispatch(allActions.teams.teamSelected(newTeam));
    }
  };
  return <TeamList key="newTeam-list" clickHandler={clickHandler} teams={teams} />;
};

export default Teams;

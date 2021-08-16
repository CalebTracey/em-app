import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton } from 'antd';
import allActions from '../redux/actions/index';

const TeamList = lazy(() => import('../components/team/TeamList'));

const Teams = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.teams.teamData(teams));
  }, [teams, dispatch]);

  const clickHandler = (newTeam) => {
    if (newTeam !== null) {
      dispatch(allActions.teams.teamSelected(newTeam));
    }
  };
  return (
    <Suspense
      fallback={
        <div className="skeleton">
          <Skeleton active paragraph={{ rows: 5 }} />
        </div>
      }
    >
      <TeamList key="newTeam-list" clickHandler={clickHandler} teams={teams} />
    </Suspense>
  );
};

export default Teams;

/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, useEffect } from 'react';
import { PageHeader, Skeleton, Badge } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import TeamDetailsDropDown from './TeamDetailsDropDown';
import allActions from '../../../redux/actions/index';
import apiGet from '../../../apis/apiGet';

const TeamDetailListContainer = lazy(() => import('./containers/TeamDetailListContainer'));
const TeamTaskListContainer = lazy(() => import('./containers/TeamTaskListContainer'));

const TeamDetails = ({ showDeleteTeamConfirm }) => {
  const team = useSelector((state) => state.teams.teamSelected);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    apiGet({ url: `teams/${parseInt(id, 10)}` }).then((res) => {
      dispatch(allActions.teams.teamSelected(res.data));
    });
  }, [id, dispatch]);
  return (
    <>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => history.goBack()}
        title={team.teamName}
        extra={[<TeamDetailsDropDown showDeleteTeamConfirm={showDeleteTeamConfirm} />]}
      />
      <div className="current-tasks">
        {'Current Tasks '} <Badge className="team-badge" count={team.teamTasks.length} />
      </div>

      <Suspense
        fallback={
          <div className="skeleton">
            <Skeleton active paragraph={{ rows: 5 }} />
          </div>
        }
      >
        <div className="team-task-wrapper ">
          <TeamTaskListContainer team={team} />
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div className="skeleton">
            <Skeleton active paragraph={{ rows: 5 }} />
          </div>
        }
      >
        <div className="team-members">
          {'Team Members '} <Badge className="team-badge" count={team.employees.length} />
        </div>
        <TeamDetailListContainer team={team} />
      </Suspense>
    </>
  );
};

export default TeamDetails;

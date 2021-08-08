import React, { lazy, Suspense } from 'react';
import { PageHeader, Spin, Badge } from 'antd';
import { useSelector } from 'react-redux';
import './TeamDetails.css';
import TeamDetailsDropDown from './TeamDetailsDropDown';

const TeamDetailListContainer = lazy(() => import('./containers/TeamDetailListContainer'));
const TeamTaskListContainer = lazy(() => import('./containers/TeamTaskListContainer'));

const TeamDetails = ({ showDeleteTeamConfirm }) => {
  const team = useSelector((state) => state.teams.teamSelected);
  return (
    <>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => window.history.back()}
        title={team.teamName}
        extra={[<TeamDetailsDropDown showDeleteTeamConfirm={showDeleteTeamConfirm} />]}
      />
      <div className="current-tasks">
        {'Current Tasks '} <Badge className="team-badge" count={team.teamTasks.length} />
      </div>

      <Suspense fallback={<Spin />}>
        <div className="team-task-wrapper ">
          <TeamTaskListContainer team={team} />
        </div>
      </Suspense>
      <Suspense fallback={<Spin />}>
        <div className="team-members">
          {'Team Members '} <Badge className="team-badge" count={team.employees.length} />
        </div>
        <TeamDetailListContainer key={team.id} team={team} />
      </Suspense>
    </>
  );
};

export default TeamDetails;

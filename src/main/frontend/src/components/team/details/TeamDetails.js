import React, { lazy } from 'react';
import { PageHeader, Space, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './TeamDetails.css';
import TeamDetailsDropDown from './TeamDetailsDropDown';
import { Suspense } from 'react';
const TeamDetailListContainer = lazy(() => import('./containers/TeamDetailListContainer'));
const TeamTaskListContainer = lazy(() => import('./containers/TeamTaskListContainer'));

const TeamDetails = ({ showDeleteTeamConfirm }) => {
  const team = useSelector((state) => state.teams.teamSelected);

  return !team ? (
    <Redirect to={'/'} />
  ) : (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={team.teamName}
        extra={[
          <TeamDetailsDropDown
            // handleCreateTask={handleCreateTask}
            showDeleteTeamConfirm={showDeleteTeamConfirm}
          />,
        ]}
      ></PageHeader>

      <Suspense fallback={<Spin />}>
        <TeamTaskListContainer team={team} />

        <TeamDetailListContainer key={team.id} team={team}></TeamDetailListContainer>
      </Suspense>
    </>
  );
};

export default TeamDetails;

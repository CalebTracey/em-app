/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { PageHeader, Badge } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import TeamDetailsDropDown from './TeamDetailsDropDown';
import TeamPageRedirect from '../TeamPageRedirect';
import TeamDetailListContainer from './containers/TeamDetailListContainer';
import TeamTaskListContainer from './containers/TeamTaskListContainer';

const TeamDetails = ({ showDeleteTeamConfirm, team }) => {
  const [reroute, setReroute] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (team && parseInt(id, 10) !== team.id) {
      setReroute(true);
    }
    return () => setReroute(false);
  }, [team, id]);

  return !reroute ? (
    <>
      <PageHeader
        fontWeight="bold"
        className="site-page-header"
        onBack={() => history.goBack()}
        title={team.teamName}
        extra={[
          <TeamDetailsDropDown key={team.id} showDeleteTeamConfirm={showDeleteTeamConfirm} />,
        ]}
      />
      <div className="current-tasks">
        {'Current Tasks '} <Badge className="team-badge" count={team.teamTasks.length} />
      </div>

      <div className="team-task-wrapper ">
        <TeamTaskListContainer team={team} />
      </div>

      <div className="team-members">
        {'Team Members '} <Badge className="team-badge" count={team.employees.length} />
      </div>
      <TeamDetailListContainer team={team} />
    </>
  ) : (
    <TeamPageRedirect id={id} />
  );
};

export default TeamDetails;

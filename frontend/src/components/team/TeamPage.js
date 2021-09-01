import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../../apis/api';
import allActions from '../../redux/actions/index';
import TeamDetails from './details/TeamDetails';
import TeamDeletedPage from './TeamDeletedPage';
import TeamPageRedirect from './TeamPageRedirect';

const { confirm } = Modal;

const TeamPage = () => {
  const team = useSelector((state) => state.teams.teamSelected);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const deleteTeam = async (t) => {
    await api
      .delete(`teams/${t.id}`)
      .then(() => dispatch(allActions.teams.teamDeleted(t.id)))
      .catch((error) => {
        throw new Error(error);
      });
    return <TeamDeletedPage team={team.teamName} />;
  };

  const showDeletedPage = () => {
    history.push(`/team/team-deleted/${team.id}`);
  };

  const showDeleteTeamConfirm = () => {
    confirm({
      key: 'delete-team',
      title: `Delete ${team.teamName} ?`,
      icon: <ExclamationCircleOutlined />,
      content: 'This is permanent!',
      onOk() {
        deleteTeam(team).then(() => showDeletedPage());
        dispatch(allActions.teams.teamDeleted(team.id));
      },
    });
  };

  return !team ? (
    <TeamPageRedirect id={id} />
  ) : (
    <TeamDetails
      showDeleteTeamConfirm={showDeleteTeamConfirm}
      team={team}
      data-testid="team-page"
    />
  );
};

export default TeamPage;

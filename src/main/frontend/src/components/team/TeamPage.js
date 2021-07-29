import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import allActions from '../../redux/actions/index';
import TeamDetails from './details/TeamDetails';
import api from '../../apis/api';

const { confirm } = Modal;

const TeamPage = () => {
  const team = useSelector((state) => state.teams.teamSelected);
  const [, setShowModal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteTeam = async (team) => {
    await api
      .delete(`teams/${team.id}`)
      .then(() => dispatch(allActions.teams.teamDeleted(team.id)))
      .catch((error) => {
        console.log(error);
      });
    history.push(`team-deleted/${team.id}`);
    // <Redirect to={`team-deleted/${deletedTeam.id}`} />;
  };

  const showDeleteTeamConfirm = () => {
    confirm({
      title: `Delete ${team.teamName} ?`,
      icon: <ExclamationCircleOutlined />,
      content: 'This is permanent!',
      onOk() {
        deleteTeam(team);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  // const handleCreateTask = () => {
  //   console.log('row clicked');
  // };

  // const handleTaskOk = () => {
  //   setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  // };

  // const handleTaskCancel = () => {
  //   console.log('Clicked cancel button');
  //   setVisible(false);
  // };

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (team.employees.length > 14) {
      setHasMore(false);
      setLoading(false);
      return;
    }
  };

  return (
    <div>
      {!team ? (
        null(<Redirect to="/" />)
      ) : (
        <TeamDetails
          team={team}
          showDeleteTeamConfirm={showDeleteTeamConfirm}
          handleInfiniteOnLoad={handleInfiniteOnLoad}
          loading={loading}
          hasMore={hasMore}
          setShowModal={setShowModal}
          handlePopCancel={() => setShowModal(0)}
          data-testid="team-page"
        />
      )}
    </div>
  );
};

export default TeamPage;

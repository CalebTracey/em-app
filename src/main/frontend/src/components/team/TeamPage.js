import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import allActions from "../../redux/actions/index";
import TeamDetails from "./TeamDetails";
import TeamDeletedPage from "./TeamDeletedPage";
import useTeams from "../../hooks/useTeams";
import api from "../../apis/api";

const { confirm } = Modal;

const TeamPage = () => {
  const team = useSelector((state) => state.teams.teamSelected);
  const [, setShowModal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [deletedTeam, setDeletedTeam] = useState(null);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useTeams();

  useEffect(() => {
    if (deletedTeam) {
      const sendUpdate = async () => {
        await api
          .delete(`teams/${deletedTeam.id}`)
          .then(() => dispatch(allActions.teams.teamDeleted(team.id)))
          .catch((error) => {
            console.log(error);
          });
      };
      sendUpdate();
    }
    return () => {
      setDeletedTeam(null);
    };
  }, [deletedTeam]);

  const showDeleteTeamConfirm = () => {
    confirm({
      title: `Delete ${team.teamName} ?`,
      icon: <ExclamationCircleOutlined />,
      content: "This is permanent!",
      onOk() {
        setDeletedTeam(team);
      },
      onCancel() {
        console.log("Cancel");
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
    setData(team.employees);
    setLoading(true);
    if (team.employees.length > 14) {
      setHasMore(false);
      setLoading(false);
      return;
    }
  };
  return (
    <div>
      {team ? null : <Redirect to="/" />}
      {deletedTeam ? (
        <TeamDeletedPage teamName={deletedTeam.teamName} />
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

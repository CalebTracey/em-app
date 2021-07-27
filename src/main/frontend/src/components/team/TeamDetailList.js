import React, { useEffect, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { useDispatch } from "react-redux";
import { Result, Button, message } from "antd";
import api from "../../apis/api";
import "./TeamDetails.css";
import TeamDetailListItem from "./TeamDetailListItem";
import allActions from "../../redux/actions/index";

const TeamDetailList = ({
  team,
  setShowModal,
  handlePopCancel,
  hidePopConfirm,
  confirmLoading,
}) => {
  const [mapState, setMapState] = useState(team.employees);
  const dispatch = useDispatch();
  const [updatedTeam, setUpdatedTeam] = useState(null);
  const success = (text) => {
    message.success(text);
  };

  useEffect(() => {
    if (updatedTeam) {
      const sendUpdate = async () => {
        await api
          .put(`api/v1/teams/${updatedTeam.id}`, JSON.stringify(updatedTeam))
          .then(() => dispatch(allActions.teams.updatedTeam(updatedTeam)))
          .catch((error) => {
            console.log(error);
          });
      };
      sendUpdate();
    }
    return () => {
      setUpdatedTeam(null);
    };
  }, [updatedTeam]);

  const handleRemoveTeamMember = (employee, teamFrom) => {
    const filter = teamFrom.employees.filter((e) => e.id !== employee.id);
    const updatedTeam = {
      teamName: teamFrom.teamName,
      id: teamFrom.id,
      employees: filter,
      // tasks: teamFrom.tasks,
    };
    setMapState(updatedTeam.employees);
    setUpdatedTeam(updatedTeam);
    success(
      `${employee.firstName} ${employee.lastName} removed from ${teamFrom.teamName}`
    );
  };

  const teamList = () => {
    return mapState.map((e) => {
      return (
        <div key={e.id}>
          <TeamDetailListItem
            team={team}
            key={e.id}
            employee={e}
            setShowModal={setShowModal}
            handleRemoveTeamMember={handleRemoveTeamMember}
            handlePopCancel={handlePopCancel}
            hidePopConfirm={hidePopConfirm}
            confirmLoading={confirmLoading}
          />
        </div>
      );
    });
  };

  const nodeMap =
    mapState.length === 0 ? (
      <Result
        key={team.teamName}
        title={`${team.teamName} has no members.`}
        extra={
          <Button type="primary" key="console">
            {" "}
            Add Members{" "}
          </Button>
        }
      />
    ) : (
      teamList()
    );

  return (
    <QueueAnim key="nodeMap" type={["right", "left"]} leaveReverse>
      {nodeMap}
    </QueueAnim>
  );
};

export default TeamDetailList;

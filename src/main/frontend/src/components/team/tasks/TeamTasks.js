import React from "react";
import TeamTaskList from "./TeamTaskList";

const TeamTasks = ({ team }) => {
  console.log(team);
  return (
    <div style={{ paddingBottom: "16px" }}>
      <TeamTaskList tasks={team.teamTasks} />
    </div>
  );
};

export default TeamTasks;

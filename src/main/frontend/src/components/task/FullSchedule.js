import React from "react";
import { Layout } from "antd";
import { createSelector } from "reselect";

const selectAllTasks = createSelector(
  (state) => state.team.teamData,
  (todos) => todos.filter((todo) => todo.completed).length
);

const FullSchedule = () => {
  return (
    <div>
      <Layout>
        <div>Full Schedule</div>
      </Layout>
    </div>
  );
};

export default FullSchedule;

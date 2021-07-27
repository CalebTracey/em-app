import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions/index";
import { apiGet } from "../apis/apiGet";

const Schedule = () => {
  const teams = useSelector((state) => state.teams.teamData);
  const tasks = useSelector((state) => state.teams.teamTaskData);
  const dispatch = useDispatch();

  useEffect(() => {
    let taskArr = [];
    if (teams.length === 0 || tasks.length === 0) {
      apiGet({
        url: "teams",
        headers: null,
        data: null,
      }).then((res) => {
        const data = res.data._embedded.teamList;
        data.map((team) => {
          team.teamTasks ? taskArr.push(...team.teamTasks) : (taskArr = []);
        });
        const teamSort = data.sort((a, b) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        const taskSort = taskArr.sort(
          (a, b) => new Date(a.taskStart) - new Date(b.taskStart)
        );
        if (!tasks) {
          dispatch(allActions.teams.teamTaskData(taskSort));
        }
        if (!teams) {
          dispatch(allActions.teams.teamData(teamSort));
        }
      });
    }
  }, []);

  return <div></div>;
};

export default Schedule;

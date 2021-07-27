import TeamTasks from "../../components/team/tasks/TeamTasks";
import {
  TEAMS_FETCHED,
  TEAM_ADDED,
  TEAM_DELETED,
  TEAM_SELECTED,
  TEAM_UPDATED,
  TEAM_TASKS_FETCHED,
} from "./types";

const teamData = (teams) => {
  return {
    type: TEAMS_FETCHED,
    payload: teams,
  };
};

const teamTaskData = (teamTasks) => {
  return {
    type: TEAM_TASKS_FETCHED,
    payload: teamTasks,
  };
};

const teamAdded = (team) => {
  return {
    type: TEAM_ADDED,
    payload: team,
  };
};

const teamUpdated = (updatedTeam) => {
  return {
    type: TEAM_UPDATED,
    payload: updatedTeam,
  };
};

const teamSelected = (team) => {
  return {
    type: TEAM_SELECTED,
    payload: team,
  };
};

const teamDeleted = (teamId) => {
  return {
    type: TEAM_DELETED,
    payload: teamId,
  };
};
export const teams = {
  teamData,
  teamAdded,
  teamDeleted,
  teamSelected,
  teamUpdated,
  teamTaskData,
};

/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import {
  TEAMS_FETCHED,
  TEAM_ADDED,
  TEAM_DELETED,
  TEAM_SELECTED,
  TEAM_UPDATED,
  TEAM_TASKS_FETCHED,
  TEAM_TASK_SELECTED,
} from './types';

const teamData = (teams) => ({
  type: TEAMS_FETCHED,
  payload: teams,
});

const teamTaskData = (teamTasks) => ({
  type: TEAM_TASKS_FETCHED,
  payload: teamTasks,
});

const teamTaskSelected = (task) => ({
  type: TEAM_TASK_SELECTED,
  payload: task,
});

const teamAdded = (team) => ({
  type: TEAM_ADDED,
  payload: team,
});

const teamUpdated = (updatedTeam) => ({
  type: TEAM_UPDATED,
  payload: updatedTeam,
});

const teamSelected = (team) => ({
  type: TEAM_SELECTED,
  payload: team,
});

const teamDeleted = (teamId) => ({
  type: TEAM_DELETED,
  payload: teamId,
});

export const teams = {
  teamData,
  teamAdded,
  teamDeleted,
  teamSelected,
  teamUpdated,
  teamTaskData,
  teamTaskSelected,
};

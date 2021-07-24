import {
  TEAMS_FETCHED,
  TEAM_ADDED,
  TEAM_DELETED,
  TEAM_SELECTED,
  TEAM_UPDATED,
} from './types';

const teamData = (teams) => {
  return {
    type: TEAMS_FETCHED,
    payload: teams,
  };
};

const teamAdded = (employee) => {
  return {
    type: TEAM_ADDED,
    payload: employee,
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
};

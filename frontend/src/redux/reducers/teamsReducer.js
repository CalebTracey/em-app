import {
  TEAMS_FETCHED,
  TEAM_UPDATED,
  TEAM_SELECTED,
  TEAM_DELETED,
  TEAM_ADDED,
  TEAM_TASKS_FETCHED,
  TEAM_TASK_SELECTED,
} from '../actions/types';
/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */

const initialState = {
  teamData: [],
  teamTaskData: [],
  teamSelected: null,
  teamTaskSelected: null,
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEAMS_FETCHED:
      return {
        ...state,
        teamData: action.payload,
      };
    case TEAM_TASKS_FETCHED:
      return {
        ...state,
        teamTaskData: action.payload,
      };
    case TEAM_ADDED:
      return {
        ...state,
        teamData: [...state.teamData, action.payload],
      };
    case TEAM_UPDATED:
      const teamId = action.payload.id;
      const index = state.teamData.findIndex(({ id }) => id === teamId);
      return {
        ...state,
        teamData: [
          ...state.teamData.slice(0, index),
          action.payload,
          ...state.teamData.slice(index + 1),
        ],
      };
    case TEAM_DELETED:
      return {
        ...state,
        teamData: [...state.teamData.filter((team) => team.id !== action.payload)],
      };
    case TEAM_SELECTED:
      return {
        ...state,
        teamSelected: action.payload,
      };
    case TEAM_TASK_SELECTED:
      return {
        ...state,
        teamTaskSelected: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;

// DELETE TEAM: ...state, teamData: [...state.teamData.filter((team) => team.id !== id)]

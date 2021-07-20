import {
    TEAMS_FETCHED,
    TEAM_MEMBER_REMOVED,
    TEAM_SELECTED,
    TEAM_DELETED,
} from '../actions/types'

const initialState = {
    teamData: {},
    teamSelected: {},
};

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEAMS_FETCHED:
            return {
                ...state,
                teamData: action.payload
            };
        case TEAM_MEMBER_REMOVED:
            const teamId = action.payload.id
            const index = state.teamData.findIndex(({ id }) => id === teamId);
            return {
                ...state,
                teamData: [
                    ...state.teamData.slice(0, index),
                    action.payload,
                    ...state.teamData.slice(index + 1)]
            };
        case TEAM_DELETED:
            return {
                ...state, teamData: [...state.teamData.filter((team) => team.id !== action.payload)]
            }
        case TEAM_SELECTED:
            return {
                ...state,
                teamSelected: action.payload,
            }
        default:
            return state;
    }
};

export default teamsReducer;

// DELETE TEAM: ...state, teamData: [...state.teamData.filter((team) => team.id !== id)]
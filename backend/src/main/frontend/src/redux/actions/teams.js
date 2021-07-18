import {
    TEAMS_FETCHED,
    TEAM_SELECTED,
    TEAM_UPDATED,
    TEAM_DELETED,
    TASKS_FETCHED,
} from './types';

const teamData = (teams) => {
    return {
        type: TEAMS_FETCHED,
        payload: teams,
    }
}

const teamMemberDeleted = (updatedTeam) => {
    return {
        type: TEAM_UPDATED,
        payload: updatedTeam
    }
}

const teamSelected = (team) => {
    return {
        type: TEAM_SELECTED,
        payload: team,
    }
}

const teamDeleted = (teamId) => {
    return {
        type: TEAM_DELETED,
        payload: teamId,
    }
}
export const teams = { teamData, teamMemberDeleted, teamDeleted, teamSelected }

import { OVERDUE_TASKS, UPCOMING_TASKS } from '../actions/types';
/* eslint-disable no-shadow */

const initialState = {
  overdueTasks: [],
  upcomingTasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case OVERDUE_TASKS:
      return {
        ...state,
        overdueTasks: action.payload,
      };
    case UPCOMING_TASKS:
      return {
        ...state,
        upcomingTasks: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;

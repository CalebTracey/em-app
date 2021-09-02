import { DASHBOARD_TASKS } from '../actions/types';
/* eslint-disable no-shadow */

const initialState = {
  dashboardTasks: { title: '', items: [] },
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_TASKS:
      return {
        ...state,
        dashboardTasks: { title: action.title, items: action.payload },
      };
    default:
      return state;
  }
};

export default tasksReducer;

/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import { DASHBOARD_TASKS } from './types';

const dashboardTasks = (tasks) => ({
  type: DASHBOARD_TASKS,
  title: tasks.title,
  payload: tasks.items,
});

export const tasks = {
  dashboardTasks,
};

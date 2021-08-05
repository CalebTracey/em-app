import React from 'react';
import DashboardTaskItem from './DashboardTaskItem';

const DashboardTasks = ({ tasks }) => {
  console.log(tasks);
  return tasks.map((task) => {
    return <DashboardTaskItem task={task} />;
  });
};

export default DashboardTasks;
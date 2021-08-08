import React from 'react';
import DashboardTaskItem from './DashboardTaskItem';

const DashboardTasks = ({ tasks }) => {
  return tasks.map((task) => {
    return <DashboardTaskItem task={task} />;
  });
};

export default DashboardTasks;

import React from 'react';
import DashboardTaskItem from './DashboardTaskItem';

const DashboardTasks = ({ tasks }) => tasks.map((task) => <DashboardTaskItem task={task} />);

export default DashboardTasks;

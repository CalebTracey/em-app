import React from 'react';
import './DashboardTasks.css';

const DashboardTaskItem = ({ task }) => {
  console.log(task);
  return (
    <div className="item container">
      {`Task #${task.id} due in ${task.remaining} days`}
      {task.description}
    </div>
  );
};

export default DashboardTaskItem;

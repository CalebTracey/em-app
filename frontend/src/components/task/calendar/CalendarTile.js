import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';

const CalendarTile = ({ day, tasks, clickHandler }) => {
  const [hasTasks, setHasTasks] = useState('calendar-tile-no-tasks');

  useEffect(() => {
    const date = new Date();
    const dayOfWeek = date.getDate();

    if (tasks.length !== 0) {
      if (day === dayOfWeek) {
        setHasTasks('calendar-tile-today-tasks');
      } else {
        setHasTasks('calendar-tile-tasks');
      }
      if (day < dayOfWeek) {
        setHasTasks('calendar-tile-tasks-overdue');
      }
    }
    if (tasks.length === 0 && day === dayOfWeek) {
      setHasTasks('calendar-tile-today-no-tasks');
    }
  }, [tasks, setHasTasks, day]);

  const taskLinks = () => {
    return tasks.map((task) => (
      <Link to={`/EMapp/task/${task.id}`} onClick={() => clickHandler(task)}>
        <p className="task-link">{task.description}</p>
      </Link>
    ));
  };
  return tasks.length !== 0 ? (
    <Popover title="Tasks" trigger="click" content={taskLinks}>
      <div className={hasTasks}>
        <div className="date">{day}</div>
      </div>
    </Popover>
  ) : (
    <div className={hasTasks}>
      <div className="date">{day}</div>
    </div>
  );
};

export default CalendarTile;
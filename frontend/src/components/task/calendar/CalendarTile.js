import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const CalendarTile = ({ day, tasks, clickHandler, date }) => {
  const [hasTasks, setHasTasks] = useState('calendar-tile-no-tasks');

  useEffect(() => {
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
  }, [tasks, setHasTasks, day, date]);

  const taskLinks = () =>
    tasks.map((task) => (
      <Link key={task.id} to={`/EMapp/task/${task.id}`} onClick={() => clickHandler(task)}>
        <p className="task-link">{task.description}</p>
      </Link>
    ));
  return tasks.length !== 0 ? (
    <Popover title="Tasks" trigger="click" content={taskLinks}>
      <div className={hasTasks}>
        <div className="date">
          <>{day}</>
        </div>
      </div>
    </Popover>
  ) : (
    <div className={hasTasks}>
      <div className="date">
        <>{day}</>
      </div>
    </div>
  );
};

export default CalendarTile;

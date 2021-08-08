import React, { useEffect, useState } from 'react';

const CalendarTile = ({ day, tasks }) => {
  const [hasTasks, setHasTasks] = useState('calendar-tile-no-tasks');

  useEffect(() => {
    if (tasks.length !== 0) {
      setHasTasks('calendar-tile-tasks');
    }
  }, [tasks, setHasTasks]);
  return (
    <div className={hasTasks}>
      <div className="date">{day}</div>
    </div>
  );
};

export default CalendarTile;

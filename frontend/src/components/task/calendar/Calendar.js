import React, { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import CalendarTile from './CalendarTile';

const Calendar = ({ tasks }) => {
  const [weeks, setWeeks] = useState([]);
  const weekCount = 7;

  useEffect(() => {
    if (weeks.length === 0 && tasks !== undefined) {
      const date = new Date();
      const daysMonth = new Date(date.getMonth(), date.getYear(), 0).getDate();
      const days = new Array(daysMonth).fill();
      const retList = days.map((day, dayIdx) => {
        // const current = new Date(date.getMonth(), date.getYear(), dayIdx + 1);
        const taskMatches = tasks.filter(
          ({ taskEnd }) => new Date(taskEnd).getDate() === dayIdx + 1
        );
        return <CalendarTile day={dayIdx + 1} tasks={taskMatches} />;
      });
      const weekArray = (retList, weekCount) => {
        let chunks = [];
        while (retList.length) {
          chunks.push(retList.splice(0, weekCount));
        }
        return chunks;
      };
      const weeks = weekArray(retList, weekCount);
      setWeeks(weeks);
    }
  }, [weeks, setWeeks, tasks]);
  console.log(weeks);
  return !weeks ? (
    <Skeleton />
  ) : (
    weeks.map((week) => {
      return <div className="week">{week}</div>;
    })
  );
};

export default Calendar;

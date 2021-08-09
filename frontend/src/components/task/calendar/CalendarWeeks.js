import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SkeletonLoad from '../../../utils/SkeletonLoad';
import CalendarTile from './CalendarTile';
import CalendarTileDisabled from './CalendarTileDisabled';

const CalendarWeeks = ({ clickHandler }) => {
  const tasks = useSelector((state) => state.teams.teamTaskData);
  const [weeks, setWeeks] = useState([]);
  const weekCount = 7;

  useEffect(() => {
    if (weeks.length === 0 && tasks !== undefined) {
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
      const daysMonth = new Date(date.getMonth(), date.getYear(), 0).getDate();

      const daysMonthArray = new Array(daysMonth).fill();
      const emptyMonthArray = [...Array(35)].map((x, i) => <CalendarTileDisabled key={i} />);

      const calendarTiles = daysMonthArray.map((day, dayIdx) => {
        const taskMatches = tasks.filter(
          ({ taskEnd }) =>
            new Date(taskEnd).getDate() === dayIdx &&
            new Date(taskEnd).getMonth() === date.getMonth()
        );
        return <CalendarTile day={dayIdx + 1} tasks={taskMatches} clickHandler={clickHandler} />;
      });

      emptyMonthArray.splice(firstDay - 1, daysMonth, ...calendarTiles);

      const weekArray = (emptyMonthArray, weekCount) => {
        let chunks = [];
        while (emptyMonthArray.length) {
          chunks.push(emptyMonthArray.splice(0, weekCount));
        }
        return chunks;
      };
      const weeks = weekArray(emptyMonthArray, weekCount);
      setWeeks(weeks);
    }
  }, [weeks, setWeeks, tasks, clickHandler]);

  return !weeks ? (
    <SkeletonLoad />
  ) : (
    weeks.map((week) => {
      return <div className="week">{week}</div>;
    })
  );
};

export default CalendarWeeks;

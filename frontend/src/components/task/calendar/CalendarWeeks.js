/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Skeleton, Space } from 'antd';
import CalendarTile from './CalendarTile';
import CalendarTileDisabled from './CalendarTileDisabled';
// import useGreenLog from '../../../hooks/useGreenLog';

const WeekCount = 7; // for 7 x 5 grid

const CalendarWeeks = ({ clickHandler, date, tasks }) => {
  const [weeks, setWeeks] = useState([]);
  const [firstDay] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1);
  const [daysMonth] = useState(new Date(date.getYear(), date.getMonth() + 1, 0).getDate());

  useEffect(() => {
    if (weeks.length === 0 && tasks !== undefined) {
      const daysMonthArray = new Array(daysMonth).fill();
      const emptyMonthArray = [...Array(35)].map((x, i) => <CalendarTileDisabled key={i} />);

      const calendarTiles = daysMonthArray.map((day, dayIdx) => {
        const taskMatches = tasks.filter(
          ({ taskEnd }) =>
            new Date(taskEnd).getDate() === dayIdx &&
            new Date(taskEnd).getMonth() === date.getMonth()
        );
        return (
          <CalendarTile
            key={dayIdx + 2 * 10}
            day={dayIdx + 1}
            date={date}
            tasks={taskMatches}
            clickHandler={clickHandler}
          />
        );
      });

      emptyMonthArray.splice(firstDay - 1, daysMonth, ...calendarTiles);

      const weekArray = () => {
        const chunks = [];
        while (emptyMonthArray.length) {
          chunks.push(emptyMonthArray.splice(0, WeekCount));
        }
        return chunks;
      };
      const weeksResult = weekArray(emptyMonthArray, WeekCount);
      setWeeks(weeksResult);
    }
  }, [weeks, setWeeks, tasks, clickHandler, date, daysMonth, firstDay]);

  // useGreenLog('Date', new Date().toLocaleDateString());
  // useGreenLog('First day (weekday val)', firstDay);
  // useGreenLog('Days in Month', daysMonth);

  return !weeks ? (
    <Space style={{ margin: '2rem' }}>
      <div className="skeleton">
        <Skeleton active paragraph={{ rows: 5 }} />
      </div>
    </Space>
  ) : (
    weeks.map((week, i) => (
      <div key={i} className="week">
        {week}
      </div>
    ))
  );
};

export default CalendarWeeks;

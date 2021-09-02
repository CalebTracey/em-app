/* eslint-disable react/prop-types */
import React from 'react';
import Calendar from './Calendar';

const CalendarContainer = ({ date, tasks }) => (
  <div className="calendar-container">
    <div className="task-title-text">{date.toLocaleString('default', { month: 'long' })}</div>
    <div className="weekdays">
      <p className="day">Sunday</p>
      <p className="day">Monday</p>
      <p className="day">Tuesday</p>
      <p className="day">Wednesday</p>
      <p className="day">Thursday</p>
      <p className="day">Friday</p>
      <p className="day">Saturday</p>
    </div>
    <Calendar date={date} tasks={tasks} />
  </div>
);

export default CalendarContainer;

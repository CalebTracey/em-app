import React, { useEffect } from 'react';
import './Calendar.css';
import { useDispatch } from 'react-redux';
import CalendarWeeks from './CalendarWeeks';
import useGetTeamTasks from '../../../hooks/useGetTeamTasks';
import allActions from '../../../redux/actions/index';
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

const Calendar = ({ date }) => {
  const dispatch = useDispatch();

  const [, getTeamTasks] = useGetTeamTasks({
    url: `team_tasks/month/${date.getMonth()}`,
    data: null,
  });

  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };

  useEffect(() => {
    getTeamTasks();
  }, [getTeamTasks]);

  return (
    <div className="full-schedule-container">
      <div className="calendar-container">
        <div className="calendar">
          <CalendarWeeks className="week" date={date} clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

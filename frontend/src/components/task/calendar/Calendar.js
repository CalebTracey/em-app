import React, { useEffect } from 'react';
import './Calendar.css';
import CalendarWeeks from './CalendarWeeks';
import useGetTeamTasks from '../../../hooks/useGetTeamTasks';
import { useDispatch } from 'react-redux';
import allActions from '../../../redux/actions/index';

const Calendar = () => {
  const dispatch = useDispatch();
  const date = new Date();

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
          <CalendarWeeks className="week" clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

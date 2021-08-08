import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Calendar.css';
import CalendarWeeks from './CalendarWeeks';
import useGetTeamTasks from '../../../hooks/useGetTeamTasks';
import { Skeleton } from 'antd';
import { useDispatch } from 'react-redux';
import allActions from '../../../redux/actions/index';

const Calendar = () => {
  const tasks = useSelector((state) => state.teams.teamTaskData);
  const [monthTasks, setMonthTasks] = useState([]);
  const dispatch = useDispatch();
  const date = new Date();

  const [result, getTeamTasks] = useGetTeamTasks({
    url: `team_tasks/month/${date.getMonth()}`,
    data: null,
  });

  const clickHandler = (task) => {
    if (task !== null) {
      dispatch(allActions.teams.teamTaskSelected(task));
    }
  };

  useEffect(() => {
    if (monthTasks.length === 0) {
      getTeamTasks();

      if (result.data !== null) {
        setMonthTasks(result.data);
      }
    }
  }, [monthTasks, getTeamTasks, result, setMonthTasks, tasks]);

  return monthTasks.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="full-schedule-container">
      <div className="calendar-container">
        <div className="calendar">
          <CalendarWeeks className="week" tasks={monthTasks} clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

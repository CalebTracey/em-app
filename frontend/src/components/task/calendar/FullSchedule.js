import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './FullSchedule.css';
import Calendar from './Calendar';
import useGetTeamTasks from '../../../hooks/useGetTeamTasks';
import { Skeleton } from 'antd';

const FullSchedule = () => {
  const tasks = useSelector((state) => state.teams.teamTaskData);
  const [monthTasks, setMonthTasks] = useState([]);
  const date = new Date();
  const [result, getTeamTasks] = useGetTeamTasks({
    url: `team_tasks/month/${date.getMonth()}`,
    data: null,
  });

  useEffect(() => {
    if (monthTasks.length === 0) {
      const fetchMonthTasks = async () => {
        await getTeamTasks();
      };

      fetchMonthTasks();
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
        <div className="task-title-text">{date.toLocaleString('default', { month: 'long' })}</div>
        <div className="calendar">
          <Calendar className="week" tasks={monthTasks} />
        </div>
      </div>
    </div>
  );
};

export default FullSchedule;

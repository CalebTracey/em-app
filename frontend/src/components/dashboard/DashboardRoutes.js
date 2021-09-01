/* eslint-disable react/prop-types */
import React, { lazy, Suspense } from 'react';
import { Space, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const CalendarContainer = lazy(() => import('../task/calendar/CalendarContainer'));
const TaskListOverdue = lazy(() => import('../task/TaskListOverdue'));

const DashboardRoutes = ({ date }) => {
  const overdueTasks = useSelector((state) => state.tasks.overdueTasks);

  return (
    <Suspense
      fallback={
        <Space style={{ margin: '2rem' }}>
          <div className="skeleton">
            <Skeleton active paragraph={{ rows: 5 }} />
          </div>
        </Space>
      }
    >
      <Switch>
        <Route exact path="/EMapp" render={() => <CalendarContainer date={date} />} />
        <Route
          exact
          path="/EMapp/overdue"
          render={() => <TaskListOverdue date={date} tasks={overdueTasks} />}
        />
      </Switch>
    </Suspense>
  );
};

export default DashboardRoutes;

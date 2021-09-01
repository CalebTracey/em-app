import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './utils/NotFound';

const Employees = lazy(() => import('./containers/Employees'));
const EmployeeDetails = lazy(() => import('./components/employee/EmployeeDetails'));
const AddEmployee = lazy(() => import('./components/employee/add/AddEmployee'));
const Teams = lazy(() => import('./containers/Teams'));
const TeamPage = lazy(() => import('./components/team/TeamPage'));
const TeamDeletedPage = lazy(() => import('./components/team/TeamDeletedPage'));
const CreateTeam = lazy(() => import('./components/team/create/CreateTeam'));
const TaskDetails = lazy(() => import('./components/task/TaskDetails'));
const TaskListContainer = lazy(() => import('./components/task/TaskListContainer'));
const TaskListOverdue = lazy(() => import('./components/task/TaskListOverdue'));
const Schedule = lazy(() => import('./containers/Schedule'));
const FullSchedule = lazy(() => import('./components/task/calendar/Calendar'));
const Preferences = lazy(() => import('./containers/Preferences'));
const ApiContainer = lazy(() => import('./containers/ApiContainer'));

const Routes = () => (
  <Switch>
    <Route exact path="/EMapp" component={ApiContainer} />
    <Route exact path="/EMapp/dashboard" component={ApiContainer} />
    <Route exact path="/EMapp/preferences" component={Preferences} />
    <Route exact path="/EMapp/addemployee" component={AddEmployee} />
    <Route exact path="/EMapp/create-team" component={CreateTeam} />
    <Route exact path="/EMapp/employees" component={Employees} />
    <Route exact path="/EMapp/schedule" component={Schedule} />
    <Route exact path="/EMapp/full-schedule" component={FullSchedule} />
    <Route exact path="/EMapp/teams" component={Teams} />
    <Route path="/EMapp/employees/:id" component={EmployeeDetails} />
    <Route path="/EMapp/tasks" component={TaskListContainer} />
    <Route path="/EMapp/task/:id" component={TaskDetails} />
    <Route path="/EMapp/tasks/overdue" component={TaskListOverdue} />
    <Route path="/EMapp/team/:id" component={TeamPage} />
    <Route path="/EMapp/team/team-deleted/:id" component={TeamDeletedPage} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;

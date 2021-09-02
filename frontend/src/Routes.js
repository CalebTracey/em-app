import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './utils/NotFound';

const Employees = lazy(() => import('./containers/Employees'));
const AddEmployee = lazy(() => import('./components/employee/add/AddEmployee'));
const Teams = lazy(() => import('./containers/Teams'));
const TeamPage = lazy(() => import('./components/team/TeamPage'));
const TeamDeletedPage = lazy(() => import('./components/team/TeamDeletedPage'));
const CreateTeam = lazy(() => import('./components/team/create/CreateTeam'));
const TaskListContainer = lazy(() => import('./components/task/TaskListContainer'));
const Schedule = lazy(() => import('./containers/Schedule'));
const Preferences = lazy(() => import('./containers/Preferences'));
const ApiContainer = lazy(() => import('./containers/ApiContainer'));
const EmployeeDetailsContainer = lazy(() =>
  import('./components/employee/containers/EmployeeDetailsContainer')
);
const TaskDetailsContainer = lazy(() =>
  import('./components/task/containers/EmployeeDetailsContainer')
);

const Routes = () => (
  <Switch>
    <Route exact path="/EMapp" component={ApiContainer} />
    <Route exact path="/EMapp/preferences" component={Preferences} />
    <Route exact path="/EMapp/addemployee" component={AddEmployee} />
    <Route exact path="/EMapp/create-team" component={CreateTeam} />
    <Route exact path="/EMapp/employees" component={Employees} />
    <Route exact path="/EMapp/schedule" component={Schedule} />
    <Route exact path="/EMapp/teams" component={Teams} />
    <Route path="/EMapp/employees/:id" component={EmployeeDetailsContainer} />
    <Route path="/EMapp/task/:id" component={TaskDetailsContainer} />
    <Route path="/EMapp/team/:id" component={TeamPage} />
    <Route path="/EMapp/tasks" component={TaskListContainer} />
    <Route path="/EMapp/team/team-deleted/:id" component={TeamDeletedPage} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;

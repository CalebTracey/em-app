import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './utils/NotFound';

const Employees = lazy(() => import('./containers/Employees'));
const TeamDeletedPage = lazy(() => import('./components/team/TeamDeletedPage'));
const Preferences = lazy(() => import('./containers/Preferences'));
const Schedule = lazy(() => import('./containers/Schedule'));
const FullSchedule = lazy(() => import('./components/task/calendar/Calendar'));
const CreateTeam = lazy(() => import('./components/team/create/CreateTeam'));
const TeamPage = lazy(() => import('./components/team/TeamPage'));
const AddEmployee = lazy(() => import('./components/employee/add/AddEmployee'));
const Teams = lazy(() => import('./containers/Teams'));
const EmployeeDetails = lazy(() => import('./components/employee/EmployeeDetails.jsx'));
const TaskDetails = lazy(() => import('./components/task/TaskDetails'));
const ApiContainer = lazy(() => import('./containers/ApiContainer'));

const Routes = () => {
  return (
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
      <Route path="/EMapp/team/team-deleted/:id" component={TeamDeletedPage} />
      <Route path="/EMapp/task/:id" component={TaskDetails} />
      <Route path="/EMapp/team/:id" component={TeamPage} />
      <Route component={NotFound} />
    </Switch>
  );
};
//"/EMapp/employees/redirect"
export default Routes;

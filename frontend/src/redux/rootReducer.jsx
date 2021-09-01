import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import employees from './reducers/employeesReducer';
import company from './reducers/companyReducer';
import teams from './reducers/teamsReducer';
import tasks from './reducers/tasksReducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees,
    company,
    teams,
    tasks,
  });

export default rootReducer;

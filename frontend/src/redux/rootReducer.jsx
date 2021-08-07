import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import employees from './reducers/employeesReducer';
import company from './reducers/companyReducer';
import teams from './reducers/teamsReducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees,
    company,
    teams,
  });

export default rootReducer;

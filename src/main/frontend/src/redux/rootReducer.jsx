import { combineReducers } from 'redux';
import employees from './reducers/employeesReducer';
import company from './reducers/companyReducer';
import teams from './reducers/teamsReducer';

const rootReducer = combineReducers({
  employees,
  company,
  teams,
});

export default rootReducer;

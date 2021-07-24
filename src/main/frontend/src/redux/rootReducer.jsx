import { combineReducers } from 'redux';
import employees from './reducers/employeesReducer';
import company from './reducers/companyReducer';
import teams from './reducers/teamsReducer';
import dataLoad from './reducers/dataLoadReducer';

const rootReducer = combineReducers({
  employees,
  company,
  teams,
  dataLoad,
});

export default rootReducer;

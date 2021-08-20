import {
  EMPLOYEES_FETCHED,
  EMPLOYEE_ADDED,
  EMPLOYEE_SELECTED,
  EMPLOYEE_DELETED,
} from '../actions/types';
/* eslint-disable no-shadow */

const initialState = {
  employeeData: [],
  employeeSelected: null,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCHED:
      return {
        ...state,
        employeeData: action.payload,
      };
    case EMPLOYEE_ADDED:
      return {
        ...state,
        employeeData: [...state.employeeData, action.payload],
      };
    case EMPLOYEE_DELETED:
      return {
        ...state,
        employeeData: [...state.employeeData.filter((employee) => employee.id !== action.payload)],
      };
    case EMPLOYEE_SELECTED:
      return {
        ...state,
        employeeSelected: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;

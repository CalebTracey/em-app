import {
  EMPLOYEES_FETCHED,
  EMPLOYEE_ADDED,
  EMPLOYEE_SELECTED,
} from './types';

const employeeData = (employees) => {
  return {
    type: EMPLOYEES_FETCHED,
    payload: employees,
  };
};

const employeeAdded = (employee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: employee,
  };
};

const employeeSelected = (employee) => {
  return {
    type: EMPLOYEE_SELECTED,
    payload: employee,
  };
};

export const employees = {
  employeeData,
  employeeAdded,
  employeeSelected,
};

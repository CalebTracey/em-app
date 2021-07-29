import { EMPLOYEES_FETCHED, EMPLOYEE_ADDED, EMPLOYEE_SELECTED, EMPLOYEE_DELETED } from './types';

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

const employeeDeleted = (employeeId) => {
  return {
    type: EMPLOYEE_DELETED,
    payload: employeeId,
  };
};

export const employees = {
  employeeData,
  employeeAdded,
  employeeSelected,
  employeeDeleted,
};

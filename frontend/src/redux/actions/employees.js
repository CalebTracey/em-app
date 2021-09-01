/* eslint-disable import/prefer-default-export */
import { EMPLOYEES_FETCHED, EMPLOYEE_ADDED, EMPLOYEE_SELECTED, EMPLOYEE_DELETED } from './types';

const employeeData = (employees) => ({
  type: EMPLOYEES_FETCHED,
  payload: employees,
});

const employeeAdded = (employee) => ({
  type: EMPLOYEE_ADDED,
  payload: employee,
});

const employeeSelected = (employee) => ({
  type: EMPLOYEE_SELECTED,
  payload: employee,
});

const employeeDeleted = (employeeId) => ({
  type: EMPLOYEE_DELETED,
  payload: employeeId,
});

export const employees = {
  employeeData,
  employeeAdded,
  employeeSelected,
  employeeDeleted,
};

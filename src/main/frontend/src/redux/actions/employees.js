import { EMPLOYEES_FETCHED, EMPLOYEE_ADDED } from './types';

const employeeData = (employees) => {
    return {
        type: EMPLOYEES_FETCHED,
        payload: employees,
    }
}

const employeeAdded = (employee) => {
    return {
        type: EMPLOYEE_ADDED,
        payload: employee
    }
}

export const employees = { employeeData, employeeAdded }
import { EMPLOYEES_FETCHED }from './types';

const employeeData = (employees) => {
    return {
        type: EMPLOYEES_FETCHED,
        payload: employees,
    }
}

export const employees = {employeeData}
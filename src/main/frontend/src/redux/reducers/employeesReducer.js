import {
    EMPLOYEES_FETCHED,
    EMPLOYEE_ADDED,
    EMPLOYEE_SELECTED
} from '../actions/types'

const initialState = {
    employeeData: {},
    employeeSelected: {}
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCHED:
            return {
                ...state,
                employeeData: action.payload
            };
        case EMPLOYEE_ADDED:
            return {
                ...state,
                employeeData: [...state.employeeData, action.payload]
            };
        case EMPLOYEE_SELECTED:
            return {
                ...state,
                employeeSelected: action.payload,
            }
        default:
            return state;
    }
};

export default employeesReducer;

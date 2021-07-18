import { EMPLOYEES_FETCHED } from '../actions/types'

const initialState = {
    employeeData: {}
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCHED:
            return {
                ...state,
                employeeData: action.payload
            };
        default:
            return state;
    }
};

export default employeesReducer;

//employeeData: [...state.employeeData, action.payload]
import { EMPLOYEES_FETCHED, EMPLOYEE_ADDED } from '../actions/types'

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
            case EMPLOYEE_ADDED:
            //const employeeId = action.payload.id
            // const index = state.teamData.findIndex(({ id }) => id === employeeId);
            return {
                ...state,
                employeeData: [...state.employeeData, action.payload]
            };
        default:
            return state;
    }
};

export default employeesReducer;

//employeeData: [...state.employeeData, action.payload]
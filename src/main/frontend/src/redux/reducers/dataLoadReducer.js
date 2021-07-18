import { DATA_FETCHED } from '../actions/types'

const dataLoad = (dataLoad = (false), action) => {
    if (action.type === DATA_FETCHED) {
        return action.payload
    }
    return dataLoad;
}

export default dataLoad
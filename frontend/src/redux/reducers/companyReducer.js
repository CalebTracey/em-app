import { COMPANY_FETCHED } from '../actions/types';
/* eslint-disable no-shadow */

const company = (company = {}, action) => {
  if (action.type === COMPANY_FETCHED) {
    return action.payload;
  }
  return company;
};
export default company;

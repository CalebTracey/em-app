import { COMPANY_FETCHED } from './types';

export const company = (company) => {
  return {
    type: COMPANY_FETCHED,
    payload: company,
  };
};

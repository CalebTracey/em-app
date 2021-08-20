import { COMPANY_FETCHED } from './types';
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */

export const company = (co) => ({
  type: COMPANY_FETCHED,
  payload: co,
});

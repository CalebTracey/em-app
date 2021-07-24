import { DATA_FETCHED } from './types';

export const dataLoad = (value) => {
  return {
    type: DATA_FETCHED,
    payload: value,
  };
};

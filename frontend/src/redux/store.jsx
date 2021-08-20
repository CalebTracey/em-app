/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

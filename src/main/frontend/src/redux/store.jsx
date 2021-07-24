import { createStore } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  //{ chords: {active: false }, scales: {active: false }},
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './redux/store';

import './index.css';
import App from './App';
const connectedStore = store;

ReactDOM.render(
  <Provider store={connectedStore}>
    <App history={history} />
  </Provider>,
  document.querySelector('#root')
);

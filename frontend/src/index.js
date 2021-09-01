import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import store, { history } from './redux/store';
import LandingPage from './components/landing page/LandingPage';

const connectedStore = store;

ReactDOM.render(
  <Provider store={connectedStore}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/EMapp" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);

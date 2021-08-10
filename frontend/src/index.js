import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './redux/store';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Skeleton } from 'antd';
import './index.css';

const App = lazy(() => import('./App'));
const LandingPage = lazy(() => import('./components/landing page/LandingPage'));

const connectedStore = store;

ReactDOM.render(
  <Provider store={connectedStore}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<Skeleton active paragraph={{ rows: 4 }} />}>
        {/* <Redirect from="/"  exact to="/landing" /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/EMapp" component={App} />
        </Switch>
      </Suspense>
      {/* <App history={history} /> */}
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);

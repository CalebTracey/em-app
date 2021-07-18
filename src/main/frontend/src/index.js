import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';
import App from './components/App';
import store from './redux/store'

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {/* <App /> */}
            <Route component={App}/>
        </Router>
    </Provider>,
    document.querySelector('#root'));


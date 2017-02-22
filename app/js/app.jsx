import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from 'store';
import Home from 'pages/Home';
import { checkLogin } from 'actions/auth';
import Layout from 'components/general/Layout';
import asyncComponent from 'components/general/AsyncComponent';

import 'scss/app.scss';


if (module.hot) module.hot.accept();

const Go = asyncComponent(() => System.import('pages/Go'));
const QDB = asyncComponent(() => System.import('pages/QDB'));
const Events = asyncComponent(() => System.import('pages/Events'));
const Scoreboard = asyncComponent(() => System.import('pages/Scoreboard'));

store.dispatch(checkLogin());

window.onload = () => {
  gapi.load('auth2', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/go" component={Go} />
              <Route path="/qdb" component={QDB} />
              <Route path="/events" component={Events} />
              <Route path="/scoreboard" component={Scoreboard} />
              <Route component={Home} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>,
      document.getElementById('react'),
    );
  });
};

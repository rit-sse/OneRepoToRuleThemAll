import React from 'react';
import store from 'store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { checkLogin } from 'actions/auth';
import Layout from 'components/general/Layout';
import asyncComponent from 'components/general/AsyncComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'scss/app.scss';

if (module.hot) module.hot.accept();

const Go = asyncComponent(() => System.import('pages/Go'));
const QDB = asyncComponent(() => System.import('pages/QDB'));
const GTV = asyncComponent(() => System.import('pages/GTV'));
const Home = asyncComponent(() => System.import('pages/Home'));
const Events = asyncComponent(() => System.import('pages/Events'));
const Scoreboard = asyncComponent(() => System.import('pages/Scoreboard'));

store.dispatch(checkLogin());

window.onload = () => {
  gapi.load('auth2', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/trash" component={GTV} />
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
          </Switch>
        </BrowserRouter>
      </Provider>,
      document.getElementById('react'),
    );
  });
};

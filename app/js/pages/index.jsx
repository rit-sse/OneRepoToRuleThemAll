import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import Layout from 'components/general/Layout';
import asyncComponent from 'components/general/AsyncComponent';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from 'history';

import 'scss/app.scss';

const Go = asyncComponent(() => import('pages/Go'));
const QDB = asyncComponent(() => import('pages/QDB'));
const GTV = asyncComponent(() => import('pages/GTV'));
const Home = asyncComponent(() => import('pages/Home'));
const Static = asyncComponent(() => import('pages/Static'));
const Events = asyncComponent(() => import('pages/Events'));
const Scoreboard = asyncComponent(() => import('pages/Scoreboard'));
const Mentoring = asyncComponent(() => import('pages/Mentoring'));
const Officers = asyncComponent(() => import('pages/Officers'));

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/gtv" component={GTV} />
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/go" component={Go} />
            <Route path="/qdb" component={QDB} />
            <Route path="/events" component={Events} />
            <Route path="/scoreboard" component={Scoreboard} />
            <Route path="/mentoring" component={Mentoring} />
            <Route path="/officers" component={Officers} />
            <Route component={Static} />
          </Switch>
        </Layout>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Root;

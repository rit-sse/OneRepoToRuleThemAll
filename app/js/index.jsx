import React from 'react';
import store from 'store';
import history from 'history';
import { Provider } from 'react-redux';
import Layout from 'general/components/Layout';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import asyncComponent from 'general/components/AsyncComponent';

import 'scss/app.scss';

import Home from 'home'; // not async

const Static = asyncComponent(() => import(/* webpackChunkName: "Static" */ 'js/static'));
const Officers = asyncComponent(() => import(/* webpackChunkName: "Officers" */ 'js/officers'));
const Scoreboard = asyncComponent(() => import(/* webpackChunkName: "Scoreboard" */ 'js/scoreboard'));

const GTV = asyncComponent(() => import(/* webpackChunkName: "Events" */ 'js/gtv'));
const Events = asyncComponent(() => import(/* webpackChunkName: "Events" */ 'js/events'));
const Go = asyncComponent(() => import(/* webpackChunkName: "Go" */ 'js/go'));
const QDB = asyncComponent(() => import(/* webpackChunkName: "QDB" */ 'js/qdb'));

// Uncomment if we ever fix mentoring
// const Mentoring = asyncComponent(() => import(/* webpackChunkName: "Mentoring" */ 'pages/Mentoring'));

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
            <Route path="/officers" component={Officers} />
            <Route path="/scoreboard" component={Scoreboard} />
            <Route path="/events" component={Events} />
            {/* <Route path="/mentoring" component={Mentoring} /> */}
            <Route component={Static} />
          </Switch>
        </Layout>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Root;

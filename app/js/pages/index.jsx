import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import Layout from 'components/general/Layout';
import asyncComponent from 'components/general/AsyncComponent';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from 'history';

import 'scss/app.scss';

const Static = asyncComponent(() => import(/* webpackChunkName: "Static" */ 'pages/Static'));
const Officers = asyncComponent(() => import(/* webpackChunkName: "Officers" */ 'pages/Officers'));
const Scoreboard = asyncComponent(() => import(/* webpackChunkName: "Scoreboard" */ 'pages/Scoreboard'));

const GTV = asyncComponent(
  () => import(/* webpackChunkName: "Events" */ 'pages/GTV'),
  [() => import(/* webpackChunkName: "Events" */ 'reducers/events')],
  ['events'],
);

const Home = asyncComponent(
  () => import(/* webpackChunkName: "Events" */ 'pages/Home'),
  [() => import(/* webpackChunkName: "Events" */ 'reducers/events')],
  ['events'],
);

const Events = asyncComponent(
  () => import(/* webpackChunkName: "Events" */ 'pages/Events'),
  [() => import(/* webpackChunkName: "Events" */ 'reducers/events')],
  ['events'],
);

const Go = asyncComponent(
  () => import(/* webpackChunkName: "Go" */ 'pages/Go'),
  [() => import(/* webpackChunkName: "Go" */ 'reducers/go')],
  ['go'],
);

const QDB = asyncComponent(
  () => import(/* webpackChunkName: "QDB" */ 'pages/QDB'),
  [
    () => import(/* webpackChunkName: "QDB" */ 'reducers/tags'),
    () => import(/* webpackChunkName: "QDB" */ 'reducers/quotes'),
  ],
  ['tags', 'quotes'],
);

const Mentoring = asyncComponent(
  () => import(/* webpackChunkName: "Mentoring" */ 'pages/Mentoring'),
  [
    () => import(/* webpackChunkName: "Mentoring" */ 'reducers/shifts'),
    () => import(/* webpackChunkName: "Mentoring" */ 'reducers/mentors'),
    () => import(/* webpackChunkName: "Mentoring" */ 'reducers/specialties'),
  ],
  ['shifts', 'mentors', 'specialties'],
);

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

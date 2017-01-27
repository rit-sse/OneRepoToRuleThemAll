import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import store from './store';
import Layout from './components/Layout';
import asyncComponent from './components/asyncComponent';

if (module.hot) module.hot.accept();

const Home = asyncComponent(() => System.import('./pages/Home'));
const Go = asyncComponent(() => System.import('./pages/Go'));
const QDB = asyncComponent(() => System.import('./pages/QDB'));
const Events = asyncComponent(() => System.import('./pages/Events'));
const Scoreboard = asyncComponent(() => System.import('./pages/Scoreboard'));

window.onload = () => {
  gapi.load('auth2', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/go" component={Go} />
            <Match pattern="/qdb" component={QDB} />
            <Match pattern="/events" component={Events} />
            <Match pattern="/scoreboard" component={Scoreboard} />
            <Miss component={Home} />
          </Layout>
        </BrowserRouter>
      </Provider>,
      document.getElementById('react'),
    );
  });
};

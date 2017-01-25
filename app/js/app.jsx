import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import store from './store';
import Layout from './components/Layout';
import asyncComponent from './components/asyncComponent';

if (module.hot) module.hot.accept();

const Home = asyncComponent(() => System.import('./pages/Home'));

window.onload = () => {
  gapi.load('auth2', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Match pattern="/" component={Home} />
            <Miss component={Home} />
          </Layout>
        </BrowserRouter>
      </Provider>,
      document.getElementById('react'),
    );
  });
};

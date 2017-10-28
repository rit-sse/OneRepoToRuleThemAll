import React from 'react';
import ReactDOM from 'react-dom';
import Root from './index';

window.onload = () => {
  gapi.load('auth2', () => {
    ReactDOM.render(<Root />, document.getElementById('react'));
  });
};

if (module.hot) {
  module.hot.accept('./index', () => {
    const NewRoot = require('./index').default; // eslint-disable-line global-require
    ReactDOM.render(<NewRoot />, document.getElementById('react'));
  });
}

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'pages';

window.onload = () => {
  gapi.load('auth2', () => {
    ReactDOM.render(<Root />, document.getElementById('react'));
  });
};


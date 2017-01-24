import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from 'js/store';

if (module.hot) module.hot.accept();

window.onload = () => {
  gapi.load('auth2', () => {
    render(
      <Provider store={store}>
        <div>Hello World</div>
      </Provider>,
      document.getElementById('react'),
    );
  });
};

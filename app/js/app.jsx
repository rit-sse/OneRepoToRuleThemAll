import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';

if (module.hot) module.hot.accept();

window.onload = () => {
  render(
    <Provider store={store}>
      <div>Hello World</div>
    </Provider>,
    document.getElementById('react'),
  );
};

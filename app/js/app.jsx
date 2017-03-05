import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from 'pages';

const render = (Component) => {
  window.onload = () => {
    gapi.load('auth2', () => {
      ReactDOM.render((
        <AppContainer>
          <Component />
        </AppContainer>
      ), document.getElementById('react'));
    });
  };
};

render(Root);

if (module.hot) {
  module.hot.accept('pages', () => render(Root));
}

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from 'pages';

window.onload = () => {
  gapi.load('auth2', () => {
    render((
      <AppContainer>
        <Root />
      </AppContainer>
    ), document.getElementById('react'));
  });
};

if (module.hot) {
  module.hot.accept('pages', () => {
    const NextRoot = System.import('pages');
    window.onload = () => {
      gapi.load('auth2', () => {
        render((
          <AppContainer>
            <NextRoot />
          </AppContainer>
        ), document.getElementById('react'));
      });
    };
  });
}

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import history from 'history';
import API from 'api';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import status from './status';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      thunk.withExtraArgument(API),
      status,
      routerMiddleware(history)
    ),
    persistState(getDebugSessionKey()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default; // eslint-disable-line global-require

    store.replaceReducer(nextReducer);
  });
}

export default store;

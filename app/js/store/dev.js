import history from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import API from 'api';
import { routerMiddleware } from 'connected-react-router';
import createReducer from '../reducer';
import status from './status';
import qdb from './qdb';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(
      thunk.withExtraArgument(API),
      status,
      qdb,
      routerMiddleware(history)
    ),
    persistState(getDebugSessionKey()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

if (module.hot) {
  module.hot.accept('../reducer', () => {
    const nextReducer = require('../reducer').default; // eslint-disable-line global-require

    store.replaceReducer(nextReducer);
  });
}

export default store;

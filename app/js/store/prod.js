import history from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createReducer from '../reducers';
import API from '../api';
import status from './status';
import qdb from './qdb';

const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(
      thunk.withExtraArgument(API),
      status,
      qdb,
      routerMiddleware(history)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;

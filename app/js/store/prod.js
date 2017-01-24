import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import API from '../api';

const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(API), status),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;

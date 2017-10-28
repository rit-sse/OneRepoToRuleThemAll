import createReducer from 'reducer';

const store = do {
  if (process.env.NODE_ENV === 'production') require('./prod').default; // eslint-disable-line
  else require('./dev').default; // eslint-disable-line
};

store.asyncReducers = {};

export function injectAsyncReducer(name, asyncReducer) {
  if (!store.asyncReducers[name]) {
    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  }
}

export default store;

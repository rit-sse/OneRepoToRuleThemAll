import history from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import common from 'common/reducers';

export default function createReducer(asyncReducers = {}) {
  return connectRouter(history)(
    combineReducers({
      ...common,
      ...asyncReducers,
    })
  );
}

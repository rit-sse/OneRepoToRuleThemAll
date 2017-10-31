import history from 'history';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import common from 'common/reducers';

export default function createReducer(asyncReducers = {}) {
  return connectRouter(history)(
    combineReducers({
      form,
      ...common,
      ...asyncReducers,
    })
  );
}

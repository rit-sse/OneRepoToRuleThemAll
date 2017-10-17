import history from 'history';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import general from 'general/reducers';

export default function createReducer(asyncReducers = {}) {
  return connectRouter(history)(
    combineReducers({
      form,
      ...general,
      ...asyncReducers,
    })
  );
}

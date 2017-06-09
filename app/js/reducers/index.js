import history from 'history';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import nav from './nav';
import auth from './auth';
import user from './user';
import hover from './hover';
import modal from './modal';
import status from './status';
import scroll from './scroll';
import officers from './officers';
import committees from './committees';
import { members, memberships } from './members';

export default function createReducer(asyncReducers = {}) {
  return connectRouter(history)(
    combineReducers({
      nav,
      auth,
      form,
      user,
      hover,
      modal,
      status,
      scroll,
      members,
      officers,
      committees,
      memberships,
      ...asyncReducers,
    })
  );
}

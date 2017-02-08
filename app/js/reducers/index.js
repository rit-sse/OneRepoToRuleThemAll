import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import events from './events';
import status from './status';

const rootReducer = combineReducers({
  nav,
  auth,
  events,
  status,
});

export default rootReducer;

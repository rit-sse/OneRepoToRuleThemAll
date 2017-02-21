import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import modal from './modal';
import events from './events';
import status from './status';
import committees from './committees';

const rootReducer = combineReducers({
  nav,
  auth,
  modal,
  events,
  status,
  committees,
});

export default rootReducer;

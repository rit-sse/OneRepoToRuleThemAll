import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import status from './status';

const rootReducer = combineReducers({
  nav,
  auth,
  status,
});

export default rootReducer;

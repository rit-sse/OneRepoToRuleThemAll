import { combineReducers } from 'redux';
import auth from './auth';
import status from './status';

const rootReducer = combineReducers({
  auth,
  status,
});

export default rootReducer;

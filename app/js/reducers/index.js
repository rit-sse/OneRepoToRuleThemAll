import { combineReducers } from 'redux';
import status from './status';

const rootReducer = combineReducers({
  status,
});

export default rootReducer;

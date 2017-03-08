import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from './nav';
import auth from './auth';
import modal from './modal';
import events from './events';
import status from './status';
import committees from './committees';
import go from './go';
import specialties from './specialties';
import mentors from './mentors';
import shifts from './shifts';

export default combineReducers({
  nav,
  auth,
  modal,
  events,
  status,
  committees,
  go,
  specialties,
  mentors,
  shifts,
  form,
});

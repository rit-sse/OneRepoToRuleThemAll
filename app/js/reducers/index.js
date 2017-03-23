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
import user from './user';
import hover from './hover';
import quotes from './quotes';

export default combineReducers({
  go,
  nav,
  auth,
  form,
  user,
  hover,
  modal,
  quotes,
  shifts,
  events,
  status,
  mentors,
  committees,
  specialties,
});

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import go from './go';
import nav from './nav';
import auth from './auth';
import user from './user';
import tags from './tags';
import modal from './modal';
import hover from './hover';
import quotes from './quotes';
import events from './events';
import status from './status';
import shifts from './shifts';
import mentors from './mentors';
import committees from './committees';
import specialties from './specialties';

export default combineReducers({
  go,
  nav,
  auth,
  form,
  user,
  tags,
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

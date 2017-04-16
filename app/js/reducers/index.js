import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import committees from './committees';
import events from './events';
import go from './go';
import hover from './hover';
import members from './members';
import mentors from './mentors';
import modal from './modal';
import nav from './nav';
import officers from './officers';
import quotes from './quotes';
import shifts from './shifts';
import specialties from './specialties';
import status from './status';
import tags from './tags';
import user from './user';

export default combineReducers({
  auth,
  committees,
  events,
  form,
  go,
  hover,
  members,
  mentors,
  modal,
  nav,
  officers,
  quotes,
  shifts,
  specialties,
  status,
  tags,
  user,
});

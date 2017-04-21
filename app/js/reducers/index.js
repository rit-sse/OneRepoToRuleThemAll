import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import go from './go';
import nav from './nav';
import auth from './auth';
import tags from './tags';
import user from './user';
import hover from './hover';
import modal from './modal';
import events from './events';
import quotes from './quotes';
import shifts from './shifts';
import status from './status';
import mentors from './mentors';
import officers from './officers';
import committees from './committees';
import specialties from './specialties';
import { members, memberships } from './members';

export default combineReducers({
  go,
  nav,
  auth,
  form,
  tags,
  user,
  hover,
  modal,
  events,
  quotes,
  shifts,
  status,
  members,
  mentors,
  officers,
  committees,
  memberships,
  specialties,
});

import {
  GET_MENTORS,
  CREATE_MENTOR,
  UPDATE_MENTOR,
  DESTROY_MENTOR,
  GET_MENTOR_ON_DUTY,
} from 'actions/mentors';
import { combineReducers } from 'redux';

function all(state = {}, action) {
  switch (action.type) {
    case GET_MENTORS:
      return action.payload.data.reduce((obj, mentor) => ({
        ...obj,
        [mentor.id]: mentor,
      }), {});
    case CREATE_MENTOR:
    case UPDATE_MENTOR:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DESTROY_MENTOR: {
      const { [action.payload.id]: omit, ...rest } = state; // eslint-disable-line no-unused-vars
      return rest;
    }
    default:
      return state;
  }
}

function mentorOnDuty(state = [], action) {
  switch (action.type) {
    case GET_MENTOR_ON_DUTY:
      return action.payload.data;
    default:
      return state;
  }
}

export default combineReducers({
  all,
  mentorOnDuty,
});

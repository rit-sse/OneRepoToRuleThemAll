import {
  GET_MENTORS,
  CREATE_MENTOR,
  UPDATE_MENTOR,
  DESTROY_MENTOR,
  GET_MENTOR_ON_DUTY,
} from 'mentoring/actions';
import { combineReducers } from 'redux';

function byId(state = {}, action) {
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

function byName(state = {}, action) {
  switch (action.type) {
    case GET_MENTORS:
      return action.payload.data.reduce((obj, mentor) => ({
        ...obj,
        [`${mentor.user.firstName} ${mentor.user.lastName}`]: mentor,
      }), {});
    case CREATE_MENTOR:
    case UPDATE_MENTOR:
      return {
        ...state,
        [`${action.payload.user.firstName} ${action.payload.user.lastName}`]: action.payload,
      };
    case DESTROY_MENTOR: {
      const { [`${action.payload.user.firstName} ${action.payload.user.lastName}`]: omit, ...rest } = state; // eslint-disable-line no-unused-vars
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
  byId,
  byName,
  mentorOnDuty,
});

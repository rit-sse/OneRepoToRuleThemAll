import {
  GET_SHIFTS,
  CREATE_SHIFT,
  UPDATE_SHIFT,
  DESTROY_SHIFT,
} from 'actions/shifts';
import moment from 'moment';
import { combineReducers } from 'redux';

function initialShifts() {
  const weekdays = moment.weekdays().slice(1, -1);
  return weekdays.reduce((obj, day) => ({
    ...obj,
    [day]: {
      '10:00:00': [],
      '12:00:00': [],
      '14:00:00': [],
      '16:00:00': [],
    },
  }), {});
}

function buildShifts(shiftList) {
  const shiftObj = initialShifts();
  shiftList.forEach(({ id, startTime, day, mentorId }) => shiftObj[day][startTime].push({ id, mentorId }));

  return shiftObj;
}

function byDay(state = initialShifts(), { type, payload }) {
  switch (type) {
    case GET_SHIFTS:
      return buildShifts(payload.data);
    case CREATE_SHIFT:
      return {
        ...state,
        [payload.day]: {
          ...state[payload.day],
          [payload.startTime]: [
            ...state[payload.day][payload.startTime],
            payload.mentorId,
          ],
        },
      };
    case DESTROY_SHIFT:
      return {
        ...state,
        [payload.day]: {
          ...state[payload.day],
          [payload.startTime]: state[payload.day][payload.starTime].filter(shift => shift.id === payload.id),
        },
      };
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case GET_SHIFTS:
      return action.payload.data.reduce((obj, shift) => ({
        ...obj,
        [shift.id]: shift,
      }), {});
    case CREATE_SHIFT:
    case UPDATE_SHIFT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DESTROY_SHIFT: {
      const { [action.payload.id]: omit, ...rest } = state; // eslint-disable-line no-unused-vars
      return rest;
    }
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  byDay,
});

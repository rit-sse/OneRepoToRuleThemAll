import {
  GET_SHIFTS,
  CREATE_SHIFT,
  DESTROY_SHIFT,
} from 'actions/shifts';
import moment from 'moment';

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

export default function shifts(state = initialShifts(), { type, payload }) {
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

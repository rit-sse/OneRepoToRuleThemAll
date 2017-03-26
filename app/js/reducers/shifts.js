import {
  GET_SHIFTS,
} from 'actions/shifts';

export default function shifts(state = [], { type, payload }) {
  switch (type) {
    case GET_SHIFTS:
      return payload.data.map(({ fullName, startDate, endDate }) => ({
        fullName,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      }));
    default:
      return state;
  }
}

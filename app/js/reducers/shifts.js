import {
  GET_SHIFTS,
  CREATE_SHIFT,
  UPDATE_SHIFT,
  DESTROY_SHIFT,
} from 'actions/shifts';

export default function shifts(state = [], action) {
  switch (action.type) {
    case GET_SHIFTS:
      return action.payload.data;
    case CREATE_SHIFT:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_SHIFT:
      return state.map((shift) => {
        if (action.payload.id !== shift.id) return shift;
        return action.payload;
      });
    case DESTROY_SHIFT:
      return state.filter(shift => shift.id !== action.payload);
    default:
      return state;
  }
}

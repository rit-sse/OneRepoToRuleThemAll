import {
  GET_COMMITTEES,
  CREATE_COMMITTEE,
  UPDATE_COMMITTEE,
  DESTROY_COMMITTEE,
} from 'actions/committees';

export default function committees(state = [], action) {
  switch (action.type) {
    case GET_COMMITTEES:
      return action.payload;
    case CREATE_COMMITTEE:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_COMMITTEE:
      return state.map((committee) => {
        if (committee.id === action.payload.id) return action.payload;
        return committee;
      });
    case DESTROY_COMMITTEE:
      return state.filter(committee => committee.id !== action.payload);
    default:
      return state;
  }
}

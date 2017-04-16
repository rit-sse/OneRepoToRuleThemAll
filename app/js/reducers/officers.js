import {
  GET_OFFICERS,
  CREATE_OFFICER,
  UPDATE_OFFICER,
  DESTROY_OFFICER,
} from 'actions/officers';

export default function all(state = [], action) {
  switch (action.type) {
    case GET_OFFICERS:
      return action.payload.data;
    case CREATE_OFFICER:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_OFFICER:
      return state.map((officer) => {
        if (action.payload.id !== officer.id) return officer;
        return action.payload;
      });
    case DESTROY_OFFICER:
      return state.filter(officer => officer.id !== action.payload);
    default:
      return state;
  }
}

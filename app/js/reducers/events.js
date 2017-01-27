import {
  GET_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DESTROY_EVENT,
} from '../actions/events';

export default function (state = [], action) {
  switch (action.type) {
    case GET_EVENT:
      return action.payload;
    case CREATE_EVENT:
      return [
        action.payload,
        ...state,
      ];
    case UPDATE_EVENT:
      return state.map((event) => {
        if (action.payload.id !== event.id) return event;
        return action.payload;
      });
    case DESTROY_EVENT:
      return state.filter(event => event.id !== action.payload);
    default:
      return state;
  }
}

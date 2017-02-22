import {
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DESTROY_EVENT,
} from '../actions/events';
import { SHOW_EVENT_MODAL } from '../actions/modal';

const initState = {
  all: [],
  selected: null,
};

function all(state, action) {
  switch (action.type) {
    case GET_EVENTS:
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

function selected(state, action) {
  switch (action.type) {
    case SHOW_EVENT_MODAL:
      return action.payload.id;
    default:
      return state;
  }
}

export default function (state = initState, action) {
  return {
    all: all(state.all, action),
    selected: selected(state.selected, action),
  };
}

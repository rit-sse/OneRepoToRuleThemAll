import {
  GET_EVENTS,
  GET_EVENT_PAGE,
  GET_THREE_WEEK_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DESTROY_EVENT,
  NEXT_EVENT,
} from 'actions/events';
import { SHOW_EVENT_MODAL } from 'actions/modal';

const initState = {
  all: [],
  pagination: {
    currentPage: 0,
    totalPages: 1,
  },
  selected: null,
  threeWeek: [],
  image: [],
};

function all(state, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload.data;
    case GET_EVENT_PAGE:
      return [
        ...state,
        ...action.payload.data,
      ];
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

function threeWeek(state, action) {
  switch (action.type) {
    case GET_THREE_WEEK_EVENTS:
      return action.payload.data;
    default:
      return state;
  }
}

function image(state, action) {
  switch (action.type) {
    case GET_EVENTS: {
      // I want to come up with a better way to do this. I'm too tired right now.
      const newEvents = action.payload.data.filter(event => event.image);
      const newIds = newEvents.map(event => event.id).sort();
      const oldIds = state.map(event => event.id).sort();

      if (newIds.length === oldIds.length && newIds.every((v, i) => v === oldIds[i])) {
        return state;
      }
      return newEvents;
    }
    case NEXT_EVENT:
      return [
        ...state.slice(1),
        state[0],
      ];
    default:
      return state;
  }
}

function pagination(state, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: Math.ceil(action.payload.total / action.payload.perPage),
      };
    case GET_EVENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: Math.ceil(action.payload.total / action.payload.perPage),
      };
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

export default function events(state = initState, action) {
  return {
    all: all(state.all, action),
    selected: selected(state.selected, action),
    threeWeek: threeWeek(state.threeWeek, action),
    pagination: pagination(state.pagination, action),
    image: image(state.image, action),
  };
}

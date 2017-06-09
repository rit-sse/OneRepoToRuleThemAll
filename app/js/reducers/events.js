import { combineReducers } from 'redux';
import moment from 'moment';
import {
  GET_EVENTS,
  GET_THREE_WEEK_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DESTROY_EVENT,
  NEXT_EVENT,
} from 'actions/events';

function all(state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      if (!action.payload.paged) return action.payload.events;
      return [
        ...state,
        ...action.payload.events,
      ];
    case CREATE_EVENT:
      return [
        action.payload,
        ...state,
      ].sort((a, b) => moment(a.startDate).unix() - moment(b.startDate).unix());
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

function threeWeek(state = [], action) {
  switch (action.type) {
    case GET_THREE_WEEK_EVENTS:
      return action.payload.data;
    default:
      return state;
  }
}

function image(state = [], action) {
  switch (action.type) {
    case GET_EVENTS: {
      // I want to come up with a better way to do this. I'm too tired right now.
      const newEvents = action.payload.events.filter(event => event.image);
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

export default combineReducers({
  all,
  threeWeek,
  image,
});

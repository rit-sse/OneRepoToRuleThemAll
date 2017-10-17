import { combineReducers } from 'redux';
import { NEXT_EVENT, GET_THREE_WEEK_EVENTS } from 'actions/events';

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
  threeWeek,
  image,
});

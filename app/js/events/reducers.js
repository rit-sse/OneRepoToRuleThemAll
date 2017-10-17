import { GET_EVENTS, CREATE_EVENT, UPDATE_EVENT, DESTROY_EVENT } from 'events/actions';
import moment from 'moment';

export default (state = [], action) => {
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

import { combineReducers } from 'redux';
import {
  GET_QUOTES,
  APPROVE_QUOTE,
  UPDATE_QUOTE,
  DESTROY_QUOTE,
} from 'qdb/actions';

function all(state = [], action) {
  switch (action.type) {
    case GET_QUOTES:
      if (!action.payload.paged) return action.payload.quotes;
      return [
        ...state,
        ...action.payload.quotes,
      ];
    case APPROVE_QUOTE:
      return state.filter(quote => quote.id !== action.payload);
    case UPDATE_QUOTE:
      return state.map((quote) => {
        if (action.payload.id !== quote.id) return quote;
        return action.payload;
      });
    case DESTROY_QUOTE:
      return state.filter(quote => quote.id !== action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  all,
});

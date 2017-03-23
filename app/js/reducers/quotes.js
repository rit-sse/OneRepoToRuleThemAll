import {
  GET_QUOTES,
  GET_QUOTE_PAGE,
  APPROVE_QUOTE,
  CREATE_QUOTE,
  UPDATE_QUOTE,
  DESTROY_QUOTE,
} from 'actions/quotes';

import { combineReducers } from 'redux';

const initPagination = {
  currentPage: 0,
  totalPages: 1,
};

function all(state = [], action) {
  switch (action.type) {
    case GET_QUOTES:
      return action.payload.data;
    case GET_QUOTE_PAGE:
      return [
        ...state,
        ...action.payload.data,
      ];
    case CREATE_QUOTE:
      return [
        ...state,
        ...action.payload.data,
      ];
    case APPROVE_QUOTE:
      return state.map((quote) => {
        if (action.payload !== quote.id) return quote;
        return {
          ...quote,
          approved: true,
        };
      });
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

function pagination(state = initPagination, action) {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: Math.ceil(action.payload.total / action.payload.perPage),
      };
    case GET_QUOTE_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: Math.ceil(action.payload.total / action.payload.perPage),
      };
    default:
      return state;
  }
}

export default combineReducers({
  all,
  pagination,
});

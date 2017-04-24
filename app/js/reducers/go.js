import {
  GET_LINKS,
  GET_LINKS_PAGE,
} from 'actions/go';
import { combineReducers } from 'redux';

const initPagination = {
  currentPage: 0,
  totalPages: 1,
};

function all(state = [], action) {
  switch (action.type) {
    case GET_LINKS:
      return action.payload.data;
    case GET_LINKS_PAGE:
      return [
        ...state,
        ...action.payload.data,
      ];
    default:
      return state;
  }
}

function pagination(state = initPagination, action) {
  switch (action.type) {
    case GET_LINKS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: Math.ceil(action.payload.total / action.payload.perPage),
      };
    case GET_LINKS_PAGE:
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

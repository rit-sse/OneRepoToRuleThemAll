import { combineReducers } from 'redux';
import { HIDE_MODAL } from 'actions/modal';
import {
  GET_LINKS,
  GET_LINKS_PAGE,
  CREATE_LINK,
  UPDATE_LINK,
  DESTORY_LINK,
  CHECK_LINK,
} from 'actions/go';

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
    case CREATE_LINK:
      return [
        action.payload,
        ...state,
      ];
    case UPDATE_LINK:
      return state.map((link) => {
        if (link.shortLink === action.payload.shortLink) return action.payload;
        return link;
      });
    case DESTORY_LINK:
      return state.filter(link => link.shortLink !== action.payload);
    default:
      return state;
  }
}

function update(state = false, action) {
  switch (action.type) {
    case CHECK_LINK:
      return action.payload;
    case HIDE_MODAL:
      return false;
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
  update,
  pagination,
});

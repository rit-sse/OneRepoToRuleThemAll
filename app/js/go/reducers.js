import { combineReducers } from 'redux';
import { HIDE_MODAL } from 'common/actions';
import {
  GET_LINKS,
  GET_PUBLIC_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DESTORY_LINK,
  CHECK_LINK,
} from 'go/actions';

function all(state = [], action) {
  switch (action.type) {
    case GET_LINKS:
      action.payload.links.forEach((listItem) => {
        listItem.officer = 'true'
      })
      if (!action.payload.paged) return action.payload.links;
      return [
        ...state,
        ...action.payload.links,
      ];
    case CREATE_LINK:
      action.payload.officer = 'true'
      return [
        action.payload,
        ...state,
      ];
    case UPDATE_LINK:
      return state.map((link) => {
        link.officer = 'true'
        action.payload.officer = 'true'
        if (link.shortLink === action.payload.shortLink) return action.payload;
        return link;
      });
    case DESTORY_LINK:
      return state.filter(link => link.shortLink !== action.payload);
    default:
      return state;
  }
}

function allPublic(state = [], action) {
  switch (action.type) {
    case GET_PUBLIC_LINKS:
      action.payload.links.forEach((listItem) => {
        listItem.officer = 'false'
      })
      if (!action.payload.paged) return action.payload.links;
      return [
        ...state,
        ...action.payload.links,
      ];
    default:
      return state;
  }
}

function shouldOverride(state = false, action) {
  switch (action.type) {
    case CHECK_LINK:
      return action.payload;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  all,
  shouldOverride,
  allPublic,
});

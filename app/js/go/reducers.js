import { combineReducers } from 'redux';
import { HIDE_MODAL } from 'general/actions';
import {
  GET_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DESTORY_LINK,
  CHECK_LINK,
} from 'go/actions';

function all(state = [], action) {
  switch (action.type) {
    case GET_LINKS:
      if (!action.payload.paged) return action.payload.links;
      return [
        ...state,
        ...action.payload.links,
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

export default combineReducers({
  all,
  update,
});

import {
  GET_USER,
} from 'actions/user';
import {
  HIDE_MODAL,
} from 'actions/modal';

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case HIDE_MODAL:
      return {};
    default:
      return state;
  }
}

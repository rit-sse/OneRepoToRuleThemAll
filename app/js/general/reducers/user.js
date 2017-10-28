import { GET_USER, HIDE_MODAL } from 'general/actions';

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

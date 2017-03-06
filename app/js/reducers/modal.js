import { SHOW_MODAL, HIDE_MODAL } from 'actions/modal';

export default function modal(state = {}, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return {};
    default:
      return state;
  }
}

import { SHOW_EVENT_MODAL, HIDE_MODAL } from 'actions/modal';

export default function modal(state = null, action) {
  switch (action.type) {
    case SHOW_EVENT_MODAL:
      return action.payload.modal;
    case HIDE_MODAL:
      return null;
    default:
      return state;
  }
}

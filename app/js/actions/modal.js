export const SHOW_EVENT_MODAL = 'SHOW_EVENT_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const EVENT_MODAL = 'EVENT_MODAL';

export function showEventModal(id = null) {
  return {
    type: SHOW_EVENT_MODAL,
    payload: {
      id,
      modal: EVENT_MODAL,
    },
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

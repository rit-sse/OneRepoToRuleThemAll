export const SHOW_MODAL = 'SHOW_MODAL';

export const HIDE_MODAL = 'HIDE_MODAL';

export const EVENT_MODAL = 'EVENT_MODAL';
export const MENTOR_MODAL = 'MENTOR_MODAL';

function showModal(modalType) {
  return (id = null) => {
    return {
      type: SHOW_MODAL,
      payload: {
        id,
        modalType,
      },
    };
  };
}

export const showEventModal = showModal(EVENT_MODAL);

export const showMentorModal = showModal(MENTOR_MODAL);

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

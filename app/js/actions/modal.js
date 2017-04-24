export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const GO_MODAL = 'GO_MODAL';
export const QUOTE_MODAL = 'QUOTE_MODAL';
export const EVENT_MODAL = 'EVENT_MODAL';
export const MENTOR_MODAL = 'MENTOR_MODAL';
export const ADD_MEMBERSHIP_MODAL = 'ADD_MEMBERSHIP_MODAL';
export const VIEW_MEMBERSHIP_MODAL = 'VIEW_MEMBERSHIP_MODAL';
export const OFFICER_MODAL = 'OFFICER_MODAL';

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

export const showGoModal = showModal(GO_MODAL);
export const showEventModal = showModal(EVENT_MODAL);
export const showMentorModal = showModal(MENTOR_MODAL);
export const showQuoteModal = showModal(QUOTE_MODAL);
export const showOfficerModal = showModal(OFFICER_MODAL);
export const addMembershipModal = showModal(ADD_MEMBERSHIP_MODAL);
export const viewMembershipModal = showModal(VIEW_MEMBERSHIP_MODAL);

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

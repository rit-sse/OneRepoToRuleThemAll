import { connect } from 'react-redux';
import EventModal from 'components/events/EventModal';
import { hideModal, EVENT_MODAL } from 'actions/modal';
import { createEvent, updateEvent } from 'actions/events';
import { adjustTimezone } from 'utils/dates';

// Added so that there is no default value so that redux form dosen't mess up
const blankCommittee = {
  name: '',
};

function mapStateToProps(store) {
  const eventObj = store.events.all.find(e => e.id === store.modal.id);
  const event = eventObj ? {
    ...eventObj,
    startDate: adjustTimezone(eventObj.startDate).toISOString().split('.')[0],
    endDate: adjustTimezone(eventObj.endDate).toISOString().split('.')[0],
  } : eventObj;

  return {
    event,
    isOpen: store.modal.modalType === EVENT_MODAL,
    committees: [blankCommittee, ...store.committees],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: event => dispatch(createEvent(event)),
    update: (id, event) => dispatch(updateEvent(id, event)),
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

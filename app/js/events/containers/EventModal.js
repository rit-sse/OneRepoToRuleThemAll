import { connect } from 'react-redux';
import EventModal from 'events/components/EventModal';
import { hideModal, EVENT_MODAL } from 'general/actions';
import { createEvent, updateEvent } from 'events/actions';
import { adjustTimezone } from 'utils/dates';

// Added so that there is no default value so that redux form dosen't mess up
const blankCommittee = {
  name: '',
};

function mapStateToProps(store) {
  const eventObj = store.events.find(e => e.id === store.modal.id);
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

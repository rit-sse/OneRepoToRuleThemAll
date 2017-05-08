import { connect } from 'react-redux';
import EventModal from 'components/events/EventModal';
import { hideModal, EVENT_MODAL } from 'actions/modal';
import { createEvent, updateEvent } from 'actions/events';

function mapStateToProps(store) {
  return {
    event: store.events.all.find(e => e.id === store.modal.id),
    isOpen: store.modal.modalType === EVENT_MODAL,
    committees: store.committees,
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

import { connect } from 'react-redux';
import List from 'components/general/List';
import Event from 'components/events/Event';
import { showEventModal } from 'actions/modal';
import { getEvents, destoryEvent } from 'actions/events';

function filterEvents(events, filter) {
  if (filter.committee) return events.all.filter(event => event.committeeName === filter.committee.replace(/%20/g, ' '));
  return events.all;
}

function mapStateToProps(store, props) {
  return {
    scroll: true,
    scrollDone: store.events.pagination.totalPages <= store.events.pagination.currentPage,
    item: Event,
    loggedIn: !!store.auth.user,
    items: filterEvents(store.events, props.match.params),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: getNext => dispatch(getEvents(getNext)),
    deleteItem: id => dispatch(destoryEvent(id)),
    editItem: id => dispatch(showEventModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

import { connect } from 'react-redux';
import List from 'common/components/List';
import Event from 'events/components/Event';
import { showEventModal } from 'common/actions';
import { getEvents, destoryEvent } from 'events/actions';

function filterEvents(events, filter) {
  if (filter.committee) return events.filter(event => event.committeeName === filter.committee.replace(/%20/g, ' '));
  return events;
}

function mapStateToProps(store, props) {
  return {
    scroll: true,
    scrollDone: store.scroll,
    item: Event,
    itemProps: {
      loggedIn: !!store.auth.officer,
    },
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
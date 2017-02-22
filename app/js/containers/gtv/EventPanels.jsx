import { connect } from 'react-redux';

import EventPanels from 'components/gtv/EventPanels';
import { getEvents } from 'actions/events';

function sliceEvents(events) {
  return [
    events.slice(0, 4),
    events.slice(4, 8),
    events.slice(8, 12),
  ];
}

function mapStateToProps(store) {
  return {
    events: sliceEvents(store.events.all),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPanels);

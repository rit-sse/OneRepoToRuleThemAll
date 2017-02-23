import { connect } from 'react-redux';

import EventPanels from 'components/gtv/EventPanels';

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

export default connect(mapStateToProps)(EventPanels);

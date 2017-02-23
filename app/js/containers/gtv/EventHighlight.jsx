import { connect } from 'react-redux';

import EventHighlight from 'components/gtv/EventHighlight';
import { nextEvent } from 'actions/events';

function mapStateToProps(store) {
  return {
    event: store.events.image[0],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextEvent: () => dispatch(nextEvent()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventHighlight);

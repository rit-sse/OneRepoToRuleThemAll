import { connect } from 'react-redux';

import EventHighlight from 'gtv/components/EventHighlight';
import { nextEvent } from 'gtv/actions';

function mapStateToProps(store) {
  return {
    event: store.gtv.image[0],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextEvent: () => dispatch(nextEvent()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventHighlight);

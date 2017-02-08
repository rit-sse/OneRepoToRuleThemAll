import { connect } from 'react-redux';

import List from '../components/List';
import Event from '../components/Event';
import { getEvent } from '../actions/events';

function mapStateToProps(store) {
  return {
    item: Event,
    items: store.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getEvent()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

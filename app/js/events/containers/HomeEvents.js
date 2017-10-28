import { connect } from 'react-redux';
import { getEvents } from 'events/actions';
import HomeEvents from 'events/components/HomeEvents';

function mapStateToProps(store) {
  return {
    events: store.events.slice(0, 3),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeEvents);

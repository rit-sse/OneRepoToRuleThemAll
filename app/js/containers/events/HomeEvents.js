import { connect } from 'react-redux';
import { getEvents } from 'actions/events';
import HomeEvents from 'components/events/HomeEvents';

function mapStateToProps(store) {
  return {
    events: store.events.all.slice(0, 3),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeEvents);

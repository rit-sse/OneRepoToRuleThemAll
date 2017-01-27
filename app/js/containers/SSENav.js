import { connect } from 'react-redux';
import { toggleNav } from '../actions/nav';
import SSENav from '../components/SSENav';

function mapStateToProps(store) {
  return {
    opened: store.nav,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => dispatch(toggleNav()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SSENav);

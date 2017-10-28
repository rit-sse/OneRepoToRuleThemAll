import { connect } from 'react-redux';
import { toggleNav } from 'general/actions';
import SSENav from 'general/components/SSENav';

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

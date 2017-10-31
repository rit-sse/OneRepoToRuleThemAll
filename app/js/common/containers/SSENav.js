import { connect } from 'react-redux';
import { toggleNav } from 'common/actions';
import SSENav from 'common/components/SSENav';

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

import { connect } from 'react-redux';
import Button from '../components/Button';
import { showEventModal } from '../actions/modal';

function mapStateToProps(store) {
  return {
    shown: !!store.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(showEventModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);

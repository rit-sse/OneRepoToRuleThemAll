import { connect } from 'react-redux';
import Button from 'components/general/Button';
import { showEventModal } from 'actions/modal';

function mapStateToProps(store) {
  return {
    shown: !!store.auth.officer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(showEventModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);

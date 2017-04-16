import { connect } from 'react-redux';
import Button from 'components/general/Button';
import { showOfficerModal } from 'actions/modal';

function mapStateToProps({ auth }) {
  return {
    shown: !!auth.officer && auth.officer.primaryOfficer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(showOfficerModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);

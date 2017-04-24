import { connect } from 'react-redux';
import Button from 'components/general/Button';

function mapStateToProps({ auth }, { primary }) {
  if (primary) {
    return {
      shown: !!auth.officer && auth.officer.primaryOfficer,
    };
  }

  return {
    shown: !!auth.officer,
  };
}
function mapDispatchToProps(dispatch, { action }) {
  return {
    onClick: () => dispatch(action()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);

import { connect } from 'react-redux';
import Button from 'general/components/Button';

function mapStateToProps({ auth }, { any, primary }) {
  if (any) {
    return {
      shown: !!auth.user,
    };
  } if (primary) {
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

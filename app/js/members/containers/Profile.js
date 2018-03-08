import { connect } from 'react-redux';
import { getUser } from 'members/actions';

import Profile from '../components/Profile';

function mapStateToProps(store, ownProps) {
  const dce = ownProps.match.params.dce;
  return {
    dce,
    user: store.users[dce],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: dce => dispatch(getUser(dce)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

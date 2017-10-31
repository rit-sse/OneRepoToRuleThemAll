import { connect } from 'react-redux';
import { signIn, signOut, checkLogin } from 'common/actions';
import Login from 'common/components/Login';

function mapStateToProps(store) {
  return {
    user: store.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: user => dispatch(signIn(user)),
    signOut: () => dispatch(signOut()),
    checkLogin: () => dispatch(checkLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

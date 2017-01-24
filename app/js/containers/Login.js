import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/auth';
import Login from '../../components/navigation/Login';

function mapStateToProps(store) {
  return {
    user: store.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: user => dispatch(signIn(user)),
    signOut: () => dispatch(signOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

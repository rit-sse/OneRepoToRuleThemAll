import { connect } from 'react-redux';
import { getUser } from 'actions/user';
import UserForm from 'components/general/UserForm';

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: dce => dispatch(getUser(dce)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

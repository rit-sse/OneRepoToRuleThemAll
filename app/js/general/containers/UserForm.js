import { connect } from 'react-redux';
import { getUser } from 'general/actions';
import UserForm from 'general/components/UserForm';

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

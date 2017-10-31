import { connect } from 'react-redux';
import { getUser } from 'common/actions';
import UserForm from 'common/components/UserForm';

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

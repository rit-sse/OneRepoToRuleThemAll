import { connect } from 'react-redux';
import { hideModal, ADD_MEMBERSHIP_MODAL } from 'actions/modal';
import AddMembershipModal from 'components/scoreboard/AddMembershipModal';
import { getCommittees } from 'actions/committees';
import { addMembership } from 'actions/members';

function mapStateToProps(store) {
  return {
    isOpen: store.modal.modalType === ADD_MEMBERSHIP_MODAL,
    committees: store.committees,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(hideModal()),
    getCommittees: () => dispatch(getCommittees()),
    create: (user, membership) => dispatch(addMembership(user, membership)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMembershipModal);

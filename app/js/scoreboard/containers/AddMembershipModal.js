import { connect } from 'react-redux';
import { hideModal, ADD_MEMBERSHIP_MODAL, getCommittees } from 'common/actions';
import AddMembershipModal from 'scoreboard/components/AddMembershipModal';
import { addMembership } from 'scoreboard/actions';

function mapStateToProps(store) {
  return {
    isOpen: store.modal.modalType === ADD_MEMBERSHIP_MODAL,
    committees: store.committees,
    initialCommitteeName: store.auth.officer || '',
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

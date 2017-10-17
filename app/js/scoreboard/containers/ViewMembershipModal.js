import { connect } from 'react-redux';
import ViewMembershipsModal from 'components/scoreboard/ViewMembershipsModal';
import { hideModal, VIEW_MEMBERSHIP_MODAL } from 'actions/modal';

function mapStateToProps(store) {
  return {
    isOpen: store.modal.modalType === VIEW_MEMBERSHIP_MODAL,
    member: store.members[store.modal.id],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMembershipsModal);

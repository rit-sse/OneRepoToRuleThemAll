import { connect } from 'react-redux';
import { hideModal, VIEW_MEMBERSHIP_MODAL } from 'common/actions';
import ViewMembershipsModal from 'scoreboard/components/ViewMembershipsModal';

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

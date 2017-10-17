import { connect } from 'react-redux';
import { destroyOfficer } from 'actions/officers';
import { hideModal, DELETE_OFFICER_MODAL } from 'actions/modal';
import DeleteOfficerModal from 'components/officers/DeleteOfficerModal';

function mapStateToProps({ modal }) {
  return {
    id: modal.id,
    isOpen: modal.modalType === DELETE_OFFICER_MODAL,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteOfficer: (id) => {
      dispatch(destroyOfficer(id));
      dispatch(hideModal());
    },
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteOfficerModal);

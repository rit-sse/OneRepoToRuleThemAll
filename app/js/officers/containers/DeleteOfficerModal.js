import { connect } from 'react-redux';
import { hideModal, DELETE_OFFICER_MODAL } from 'general/actions';
import DeleteOfficerModal from 'officers/components/DeleteOfficerModal';
import { destroyOfficer } from 'officers/actions';

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

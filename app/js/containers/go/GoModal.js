import { connect } from 'react-redux';
import { hideModal, GO_MODAL } from 'actions/modal';
import { createLink, updateLink } from 'actions/go';
import GoModal from 'components/go/GoModal';

function mapStateToProps(store) {
  return {
    link: store.go.all.find(link => link.shortLink === store.modal.id),
    isOpen: store.modal.modalType === GO_MODAL,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: link => dispatch(createLink(link)),
    update: (id, link) => dispatch(updateLink(id, link)),
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoModal);

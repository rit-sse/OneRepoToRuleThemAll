import { connect } from 'react-redux';
import { hideModal, GO_MODAL } from 'actions/modal';
import { createLink, updateLink, checkLink } from 'actions/go';
import GoModal from 'components/go/GoModal';

function mapStateToProps(store) {
  return {
    link: store.go.all.find(link => link.shortLink === store.modal.id),
    shouldUpdate: store.go.update,
    isOpen: store.modal.modalType === GO_MODAL,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: link => dispatch(createLink(link)),
    update: (id, link) => dispatch(updateLink(id, link)),
    checkLink: link => dispatch(checkLink(link)),
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoModal);

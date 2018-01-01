import { connect } from 'react-redux';
import { hideModal, GO_MODAL } from 'common/actions';
import { createLink, updateLink, checkLink } from 'go/actions';
import GoModal from 'go/components/GoModal';

function mapStateToProps(store) {
  return {
    link: store.go.all.find(link => link.shortLink === store.modal.id),
    shouldOverride: store.go.shouldOverride,
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

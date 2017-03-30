import { connect } from 'react-redux';
import { hideModal, QUOTE_MODAL } from 'actions/modal';
import { createQuote, updateQuote } from 'actions/quotes';
import QDBModal from 'components/qdb/QDBModal';

function mapStateToProps(store) {
  return {
    quote: store.modal.modalType === QUOTE_MODAL ? store.quotes.all.find((quote) => {
      return quote.id === store.modal.id;
    }) || null : null,
    isOpen: store.modal.modalType === QUOTE_MODAL,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: quote => dispatch(createQuote(quote)),
    update: (id, quote) => dispatch(updateQuote(id, quote)),
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QDBModal);

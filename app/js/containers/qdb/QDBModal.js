import { connect } from 'react-redux';
import { hideModal, QUOTE_MODAL } from 'actions/modal';
import { createQuote, updateQuote } from 'actions/quotes';
import { getTags } from 'actions/tags';
import QDBModal from 'components/qdb/QDBModal';

function getQuote(quotes, id) {
  const quote = quotes.find((q) => {
    return q.id === id;
  });

  return quote ? {
    ...quote,
    tags: quote.tags.map(tag => ({ label: tag.name, value: tag.name })),
  } : null;
}

function mapStateToProps(store) {
  return {
    quote: store.modal.modalType === QUOTE_MODAL ? getQuote(store.quotes.all, store.modal.id) : null,
    isOpen: store.modal.modalType === QUOTE_MODAL,
    tags: store.tags.map(tag => ({ label: tag, value: tag })),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: quote => dispatch(createQuote(quote)),
    update: (id, quote) => dispatch(updateQuote(id, quote)),
    loadTags: () => dispatch(getTags()),
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QDBModal);

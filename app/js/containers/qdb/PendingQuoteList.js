import { connect } from 'react-redux';
import List from 'components/general/List';
import PendingQuote from 'components/qdb/PendingQuote';
import { approveQuote, getQuotes, destoryQuote } from 'actions/quotes';
import { showQuoteModal } from 'actions/modal';

function mapStateToProps(store) {
  return {
    scroll: true,
    scrollDone: store.quotes.pagination.totalPages <= store.quotes.pagination.currentPage,
    item: PendingQuote,
    itemProps: {
      loggedIn: !!store.auth.officer,
    },
    items: store.quotes.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editItem: id => dispatch(showQuoteModal(id)),
    deleteItem: id => dispatch(destoryQuote(id)),
    approveQuote: id => dispatch(approveQuote(id)),
    getItems: getNext => dispatch(getQuotes(getNext, undefined, undefined, 'null')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

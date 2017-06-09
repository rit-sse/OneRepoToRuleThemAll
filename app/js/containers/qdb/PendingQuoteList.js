import { connect } from 'react-redux';
import List from 'components/general/List';
import PendingQuote from 'components/qdb/PendingQuote';
import { approveQuote, getQuotes, destoryQuote } from 'actions/quotes';
import { showQuoteModal } from 'actions/modal';
import qs from 'qs';

function mapStateToProps(store) {
  return {
    scroll: true,
    scrollDone: store.scroll,
    item: PendingQuote,
    itemProps: {
      loggedIn: !!store.auth.officer,
    },
    items: store.quotes.all,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    editItem: id => dispatch(showQuoteModal(id)),
    deleteItem: id => dispatch(destoryQuote(id)),
    itemDispatch: {
      approveQuote: id => dispatch(approveQuote(id)),
    },
    getItems: getNext => dispatch(getQuotes(
      getNext,
      qs.parse(props.location.search.slice(1)).tag || undefined,
      undefined,
      'null',
    )),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

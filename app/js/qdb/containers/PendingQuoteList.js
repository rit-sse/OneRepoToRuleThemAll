import { connect } from 'react-redux';
import { showQuoteModal } from 'common/actions';
import List from 'common/components/List';
import { approveQuote, getQuotes, destoryQuote } from 'qdb/actions';
import PendingQuote from 'qdb/components/PendingQuote';
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

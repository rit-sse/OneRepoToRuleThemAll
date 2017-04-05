import { connect } from 'react-redux';
import List from 'components/general/List';
import Quote from 'components/qdb/Quote';
import { getQuotes, destoryQuote } from 'actions/quotes';
import { showQuoteModal } from 'actions/modal';
import qs from 'qs';

function mapStateToProps(store) {
  return {
    scroll: true,
    scrollDone: store.quotes.pagination.totalPages <= store.quotes.pagination.currentPage,
    item: Quote,
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
      filterTag: (tag, appoved) => dispatch(getQuotes(false, tag, undefined, appoved)),
    },
    getItems: (getNext) => {
      const tag = qs.parse(props.location.search.slice(1)).tag || undefined;
      dispatch(getQuotes(getNext, tag));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

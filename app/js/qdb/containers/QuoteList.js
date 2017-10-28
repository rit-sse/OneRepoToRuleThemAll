import { connect } from 'react-redux';
import List from 'general/components/List';
import { showQuoteModal } from 'general/actions';
import { getQuotes, destoryQuote } from 'qdb/actions';
import Quote from 'qdb/components/Quote';
import qs from 'qs';

function mapStateToProps(store) {
  return {
    scroll: true,
    scrollDone: store.scroll,
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
    getItems: getNext => dispatch(getQuotes(
      getNext,
      qs.parse(props.location.search.slice(1)).tag || undefined,
    )),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

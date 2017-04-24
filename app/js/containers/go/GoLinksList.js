import { connect } from 'react-redux';
import List from 'components/general/List';
import GoLink from 'components/go/GoLink';
import { getLinks } from 'actions/go';

function mapStateToProps({ go }) {
  return {
    scroll: true,
    scrollDone: go.pagination.totalPages <= go.pagination.currentPage,
    item: GoLink,
    wrapper: 'tbody',
    items: go.links,
    keyPriority: ['shortLink'],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: getNext => dispatch(getLinks(getNext)),
    deleteItem: () => {},
    editItem: () => {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

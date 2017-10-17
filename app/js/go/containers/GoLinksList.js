import { connect } from 'react-redux';
import List from 'components/general/List';
import GoLink from 'components/go/GoLink';
import { showGoModal } from 'actions/modal';
import { getLinks, destoryLink } from 'actions/go';

function mapStateToProps({ go, auth, scroll }) {
  return {
    scroll: true,
    scrollDone: scroll || !auth.officer,
    item: GoLink,
    wrapper: 'ul',
    wrapperProps: { className: 'list-group' },
    items: auth.officer ? go.all : [],
    keyPriority: ['shortLink'],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: getNext => dispatch(getLinks(getNext)),
    deleteItem: id => dispatch(destoryLink(id)),
    editItem: id => dispatch(showGoModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

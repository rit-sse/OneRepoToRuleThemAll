import { connect } from 'react-redux';
import { showGoModal } from 'general/actions';
import List from 'general/components/List';
import { getLinks, destoryLink } from 'go/actions';
import GoLink from 'go/components/GoLink';

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

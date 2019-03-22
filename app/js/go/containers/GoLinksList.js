import { connect } from 'react-redux';
import { showGoModal } from 'common/actions';
import List from 'common/components/List';
import { getLinks, destoryLink } from 'go/actions';
import GoLink from 'go/components/GoLink';
import PublicGoLink from 'go/components/PublicGoLink';

function mapStateToProps({ go, auth, scroll }) {
  return {
    scroll: true,
    scrollDone: scroll || !auth.officer,
    item: auth.officer ? GoLink : PublicGoLink,
    wrapper: 'ul',
    wrapperProps: { className: 'list-group' },
    items: go.all.filter((link) => {
      if (auth.officer) {
        return true;
      }
      return link.public;
    }),
    keyPriority: ['shortLink'],
    forceGetItems: true,
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

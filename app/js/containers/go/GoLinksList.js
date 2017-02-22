import { connect } from 'react-redux';
import List from 'components/general/List';
import GoLink from 'components/go/GoLink';
import { getLinks } from 'actions/go';

function mapStateToProps(store) {
  return {
    item: GoLink,
    wrapper: 'tbody',
    items: store.go.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getLinks()),
    deleteItem: () => {},
    editItem: () => {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

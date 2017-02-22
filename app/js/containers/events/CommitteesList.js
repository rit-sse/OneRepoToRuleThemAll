import { connect } from 'react-redux';
import List from 'components/general/List';
import Committee from 'components/events/Committee';
import { getCommittees } from 'actions/committees';

function mapStateToProps(store) {
  return {
    item: Committee,
    items: [{ name: '', description: 'all' }, ...store.committees],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getCommittees()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

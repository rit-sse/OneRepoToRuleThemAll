import { connect } from 'react-redux';
import List from 'common/components/List';
import Committee from 'events/components/Committee';
import { getCommittees } from 'common/actions';

function mapStateToProps(store) {
  return {
    item: Committee,
    defaultItems: [{ id: 1, name: '', description: 'all' }],
    items: store.committees,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getCommittees()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

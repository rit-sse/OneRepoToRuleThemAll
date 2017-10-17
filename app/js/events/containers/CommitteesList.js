import { connect } from 'react-redux';
import List from 'general/components/List';
import Committee from 'events/components/Committee';
import { getCommittees } from 'general/actions';

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

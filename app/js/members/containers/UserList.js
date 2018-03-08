import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import List from 'common/components/List';
import User from 'members/components/User';
import { getUsers } from 'members/actions';

function mapStateToProps(store) {
  return {
    item: User,
    items: Object.values(store.users),
    forceGetItems: true,
    keyPriority: ['dce'],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getUsers()),
    viewItem: dce => dispatch(push(`/members/${dce}`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

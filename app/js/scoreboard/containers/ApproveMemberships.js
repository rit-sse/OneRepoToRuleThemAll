import { connect } from 'react-redux';
import { getMemberships, approveMembership, denyMembership } from 'general/actions';
import List from 'general/components/List';
import Membership from 'scoreboard/components/Membership';

function mapStateToProps(store) {
  return {
    item: Membership,
    items: store.memberships,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editItem: id => dispatch(approveMembership(id)),
    getItems: () => dispatch(getMemberships()),
    deleteItem: id => dispatch(denyMembership(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

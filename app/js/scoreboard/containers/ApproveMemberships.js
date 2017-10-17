import { connect } from 'react-redux';
import List from 'components/general/List';
import { getMemberships, approveMembership, denyMembership } from 'actions/members';
import Membership from 'components/scoreboard/Membership';

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

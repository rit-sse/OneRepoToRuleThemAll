import { connect } from 'react-redux';
import { getMembers } from 'actions/members';
import Member from 'components/scoreboard/Member';
import List from 'components/general/List';
import { viewMembershipModal } from 'actions/modal';

function mapStateToProps(store) {
  return {
    item: Member,
    items: Object.keys(store.members).sort((a, b) => {
      return store.members[b].count - store.members[a].count;
    }).map((el, index) => {
      return {
        ...store.members[el],
        dce: el,
        index: index + 1,
      };
    }),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getMembers()),
    viewItem: id => dispatch(viewMembershipModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

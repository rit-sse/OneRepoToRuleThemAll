import { connect } from 'react-redux';
import { viewMembershipModal } from 'common/actions';
import List from 'common/components/List';
import Member from 'scoreboard/components/Member';
import { getMembers } from 'scoreboard/actions';

function mapStateToProps(store) {
  return {
    item: Member,
    items: Object
      .keys(store.members)
      .sort((a, b) => store.members[b].count - store.members[a].count)
      .map((el, index) => ({
        ...store.members[el],
        dce: el,
        index: index + 1,
      })),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getMembers()),
    viewItem: id => dispatch(viewMembershipModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

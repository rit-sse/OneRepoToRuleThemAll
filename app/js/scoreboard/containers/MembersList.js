import { connect } from 'react-redux';
import { viewMembershipModal } from 'common/actions';
import List from 'common/components/List';
import Member from 'scoreboard/components/Member';
import { getMembers } from 'scoreboard/actions';
import { getOfficers } from 'officers/actions';

function mapStateToProps(store, { displayedType }) {
  const officerDces = Object.values(store.officers).map(officer => officer.userDce);
  return {
    item: Member,
    items: Object
      .keys(store.members)
      .filter(dce => (displayedType === 'MEMBERS' ? !officerDces.includes(dce) : officerDces.includes(dce)))
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
    getItems: () => {
      dispatch(getMembers());
      dispatch(getOfficers());
    },
    viewItem: id => dispatch(viewMembershipModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

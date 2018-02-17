import { connect } from 'react-redux';
import { viewMembershipModal } from 'common/actions';
import List from 'common/components/List';
import Member from 'scoreboard/components/Member';
import { getMembers } from 'scoreboard/actions';
import { getOfficers } from 'officers/actions';

function mapStateToProps(store, { displaying }) {
  // Make a list of all the officers' dce's (eg. [abc124, xyz9876])
  const officerDces = Object.values(store.officers).map(officer => officer.userDce);
  return {
    item: Member,
    items: Object
      // Iterate over all members. Their key is their dce.
      .keys(store.members)
      // If we're displaying the officers table, filter out the officers / don't include members.
      // If we're displaying the members table, filter out the members / don't include officers.
      .filter(dce => (displaying === 'OFFICERS' ? officerDces.includes(dce) : !officerDces.includes(dce)))
      // Sort by number of memberships (highest first)
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

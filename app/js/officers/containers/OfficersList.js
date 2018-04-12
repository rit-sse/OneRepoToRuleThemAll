import { connect } from 'react-redux';
import { showOfficerModal, deleteOfficerModal } from 'common/actions';
import List from 'common/components/List';
import { getOfficers } from 'officers/actions';
import Officer from 'officers/components/Officer';

const order = new Map([
  ['President', 0],
  ['Vice President', 1],
  ['Treasurer', 2],
  ['Secretary', 3],
  ['Technology Head', 4], // dev only
]);

const sortPredicate = (officerA, officerB) => {
  if (order.get(officerA.title) > order.get(officerB.title)) {
    return 1;
  }
  return -1;
}

function mapStateToProps({ auth, officers }, { primary = false }) {
  return {
    item: Officer,
    items: Object.values(officers)
      .filter(({ primaryOfficer }) => primaryOfficer === primary)
      .sort(sortPredicate),
    itemProps: {
      showActions: !!(auth.officer && auth.officer.primaryOfficer),
    },
    wrapperProps: {
      className: 'row',
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getOfficers()),
    deleteItem: id => dispatch(deleteOfficerModal(id)),
    editItem: id => dispatch(showOfficerModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);


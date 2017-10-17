import { connect } from 'react-redux';
import List from 'components/general/List';
import { getOfficers } from 'actions/officers';
import { showOfficerModal, deleteOfficerModal } from 'actions/modal';
import Officer from 'components/officers/Officer';

function mapStateToProps({ auth, officers }, { primary = false }) {
  return {
    item: Officer,
    items: Object.values(officers).filter(({ primaryOfficer }) => primaryOfficer === primary),
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


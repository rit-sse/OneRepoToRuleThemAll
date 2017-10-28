import { connect } from 'react-redux';
import { showOfficerModal, deleteOfficerModal } from 'general/actions';
import List from 'general/components/List';
import { getOfficers } from 'officers/actions';
import Officer from 'officers/components/Officer';

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


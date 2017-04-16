import { connect } from 'react-redux';
import List from 'components/general/List';
import { getOfficers, destroyOfficer } from 'actions/officers';
import { showOfficerModal } from 'actions/modal';
import Officer from 'components/officers/Officer';

function mapStateToProps({ auth, officers }, { primary = false }) {
  return {
    item: Officer,
    items: officers.filter(({ primaryOfficer }) => primaryOfficer === primary),
    itemProps: {
      showActions: auth.officer && auth.officer.primaryOfficer,
    },
    wrapperProps: {
      className: 'row mx-auto',
      style: {
        width: '80%',
      },
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getOfficers()),
    deleteItem: id => dispatch(destroyOfficer(id)),
    editItem: id => dispatch(showOfficerModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);


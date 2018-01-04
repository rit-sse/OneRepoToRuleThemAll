import moment from 'moment';
import { connect } from 'react-redux';

import { hideModal, OFFICER_MODAL, getCommittees } from 'common/actions';
import { createOfficer, updateOfficer } from 'officers/actions';
import OfficerForm from 'officers/components/OfficerForm';

function mapStateToProps({ modal, committees, officers }) {
  const officerObj = officers[modal.id];
  const officer = officerObj ? {
    ...officerObj,
    startDate: moment(officerObj.startDate).toISOString().split('T')[0],
    endDate: officerObj.endDate ? moment(officerObj.endDate).toISOString().split('T')[0] : '',
  } : officerObj;

  return {
    officer,
    isOpen: modal.modalType === OFFICER_MODAL,
    committees: committees.map(committee => ({ label: committee.name, value: committee.name })),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: officer => dispatch(createOfficer(officer)),
    update: (id, officer) => dispatch(updateOfficer(id, officer)),
    close: () => dispatch(hideModal()),
    getCommittees: () => dispatch(getCommittees()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficerForm);

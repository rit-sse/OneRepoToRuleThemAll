import { connect } from 'react-redux';
import OfficerForm from 'components/officers/OfficerForm';
import { hideModal, OFFICER_MODAL } from 'actions/modal';
import { createOfficer, updateOfficer } from 'actions/officers';
import { getCommittees } from 'actions/committees';
import { formValueSelector } from 'redux-form';
import moment from 'moment';

const selector = formValueSelector('officer');

function mapStateToProps({ modal, committees, officers, ...state }) {
  const officerObj = officers[modal.id];
  const officer = officerObj ? {
    ...officerObj,
    startDate: moment(officerObj.startDate).toISOString().split('T')[0],
    endDate: officerObj.endDate ? moment(officerObj.endDate).toISOString().split('T')[0] : '',
  } : officerObj;

  return {
    officer,
    primaryOfficerValue: selector(state, 'primaryOfficer'),
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

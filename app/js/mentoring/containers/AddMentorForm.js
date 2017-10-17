import { connect } from 'react-redux';
import AddMentorForm from 'components/mentoring/AddMentorForm';
import { hideModal, MENTOR_MODAL } from 'actions/modal';
import { createMentor, updateMentor } from 'actions/mentors';
import { getSpecialties } from 'actions/specialties';
import moment from 'moment';

function mapStateToProps(state) {
  const mentorObj = state.mentors.byId[state.modal.id];
  const mentor = mentorObj ? {
    ...mentorObj,
    startDate: moment(mentorObj.startDate).toISOString().split('T')[0],
    endDate: moment(mentorObj.endDate).toISOString().split('T')[0],
    specialties: mentorObj.specialties.map(specialty => ({ label: specialty.name, value: specialty.name })),
  } : mentorObj;

  return {
    mentor,
    isOpen: state.modal.modalType === MENTOR_MODAL,
    specialties: state.specialties.map(specialty => ({ label: specialty.name, value: specialty.name })),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: mentor => dispatch(createMentor(mentor)),
    update: (id, mentor) => dispatch(updateMentor(id, mentor)),
    close: () => dispatch(hideModal()),
    getSpecialties: () => dispatch(getSpecialties()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMentorForm);

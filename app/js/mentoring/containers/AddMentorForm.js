import { connect } from 'react-redux';
import moment from 'moment';
import { hideModal, MENTOR_MODAL } from 'general/actions';
import { createMentor, updateMentor, getSpecialties } from 'mentoring/actions';
import AddMentorForm from 'mentoring/components/AddMentorForm';

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

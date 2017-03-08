import { connect } from 'react-redux';
import AddMentorForm from 'components/mentoring/AddMentorForm';
import { hideModal, MENTOR_MODAL } from 'actions/modal';
import { createMentor, updateMentor } from 'actions/mentors';

function mapStateToProps(state) {
  return {
    mentor: state.modal.modalType === MENTOR_MODAL ? state.mentors.all.find((m) => {
      return m.id === state.modal.id;
    }) || null : null,
    isOpen: state.modal.modalType === MENTOR_MODAL,
    specialties: state.specialties,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: mentor => dispatch(createMentor(mentor)),
    update: (id, mentor) => dispatch(updateMentor(id, mentor)),
    close: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMentorForm);

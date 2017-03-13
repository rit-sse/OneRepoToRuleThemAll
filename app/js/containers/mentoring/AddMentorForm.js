import { connect } from 'react-redux';
import AddMentorForm from 'components/mentoring/AddMentorForm';
import { hideModal, MENTOR_MODAL } from 'actions/modal';
import { createMentor, updateMentor } from 'actions/mentors';
import { getSpecialties } from 'actions/specialties';
import moment from 'moment';

function mapStateToProps(state) {
  const mentor = do {
    if (state.modal.modalType === MENTOR_MODAL) {
      var mentorObj = state.mentors.all[state.modal.id]; // eslint-disable-line vars-on-top, no-var
      if (mentorObj) {
        ({ // eslint-disable-line no-unused-expressions
          ...mentorObj,
          startDate: moment(mentorObj.startDate).toISOString().split('T')[0],
          endDate: moment(mentorObj.endDate).toISOString().split('T')[0],
          specialties: mentorObj.specialties.map(specialty => ({ label: specialty.name, value: specialty.name })),
        });
      } else {
        null; // eslint-disable-line no-unused-expressions
      }
    } else {
      null; // eslint-disable-line no-unused-expressions
    }
  };

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

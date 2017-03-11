import { connect } from 'react-redux';
import List from 'components/general/List';
import { getMentors, destroyMentor } from 'actions/mentors';
import { showMentorModal } from 'actions/modal';
import MentorListItem from 'components/mentoring/MentorListItem';
import { EDIT_MODE } from 'actions/shifts';

function mentorAuth(state) {
  return state.auth.officer && (state.auth.officer.title === 'Mentoring Head' || state.auth.officer.primaryOfficer);
}

function mapStateToProps(state) {
  return {
    item: MentorListItem,
    items: [...(mentorAuth(state) ? [{ name: 'add', add: true }] : []), ...state.mentors.all],
    itemProps: {
      editMode: state.shifts.mode === EDIT_MODE,
      loggedIn: mentorAuth(state),
    },
    wrapperProps: {
      className: 'd-flex flex-row align-items-start',
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getMentors()),
    deleteItem: id => dispatch(destroyMentor(id)),
    editItem: id => dispatch(showMentorModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

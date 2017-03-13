import { connect } from 'react-redux';
import List from 'components/general/List';
import { getMentors, destroyMentor } from 'actions/mentors';
import { showMentorModal } from 'actions/modal';
import MentorListItem from 'components/mentoring/MentorListItem';

function mentorAuth({ officer }) {
  return !!officer && (officer.title === 'Mentoring Head' || officer.primaryOfficer);
}

function mapStateToProps({ auth, mentors }) {
  return {
    item: MentorListItem,
    items: [...(mentorAuth(auth) ? [{ name: 'add', add: true }] : []), ...Object.values(mentors.all)],
    itemProps: {
      loggedIn: mentorAuth(auth),
      showActions: mentorAuth(auth),
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

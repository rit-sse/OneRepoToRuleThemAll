import { connect } from 'react-redux';
import { showMentorModal } from 'general/actions';
import List from 'general/components/List';
import MentorListItem from 'mentoring/components/MentorListItem';
import { getMentors, destroyMentor } from 'mentoring/actions';

function mentorAuth({ officer }) {
  return !!officer && (officer.title === 'Mentoring Head' || officer.primaryOfficer);
}

function mapStateToProps({ auth, mentors }) {
  return {
    item: MentorListItem,
    items: [...(mentorAuth(auth) ? [{ name: 'add', add: true }] : []), ...Object.values(mentors.byId)],
    itemProps: {
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

import { connect } from 'react-redux';
import Mentor from 'components/mentoring/Mentor';
import { MENTORS } from 'actions/mentors';
import { SPECIALTIES } from 'actions/specialties';
import { hoverMentor, unhover } from 'actions/hover';

function mapStateToProps(state, ownProps) {
  const { hover } = state;

  return {
    lighten:
      (hover.hoverType === MENTORS && hover.id !== ownProps.id) ||
      (hover.hoverType === SPECIALTIES && !ownProps.specialties.find(specialty => specialty.name === hover.name)) ||
      false,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleHover: () => dispatch(hoverMentor(ownProps.id)),
    handleUnhover: () => dispatch(unhover()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mentor);

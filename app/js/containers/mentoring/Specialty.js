import { connect } from 'react-redux';
import Specialty from 'components/mentoring/Specialty';
import { MENTORS } from 'actions/mentors';
import { SPECIALTIES } from 'actions/specialties';
import { hoverSpecialty, unhover } from 'actions/hover';

function mapStateToProps(state, ownProps) {
  const { hover, mentors } = state;
  const mentor = mentors.all[hover.id];
  return {
    lighten:
      (hover.hoverType === SPECIALTIES && hover.name !== ownProps.name) ||
      (hover.hoverType === MENTORS && mentor && !mentor.specialties.find(specialty => specialty.name === ownProps.name)) ||
      false,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleHover: () => dispatch(hoverSpecialty(ownProps.name)),
    handleUnhover: () => dispatch(unhover()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

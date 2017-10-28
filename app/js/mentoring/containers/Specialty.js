import { connect } from 'react-redux';
import Specialty from 'mentoring/components/Specialty';
import { MENTORS, SPECIALTIES } from 'mentoring/actions';
import { hoverSpecialty, unhover } from 'general/actions';

function mapStateToProps(state, ownProps) {
  const { hover, mentors } = state;
  const mentor = mentors.byId[hover.id];
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

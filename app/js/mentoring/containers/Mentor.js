import { connect } from 'react-redux';
import { hoverMentor, unhover } from 'general/actions';
import { MENTORS, SPECIALTIES } from 'mentoring/actions';
import Mentor from 'mentoring/components/Mentor';

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

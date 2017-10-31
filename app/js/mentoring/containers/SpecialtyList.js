import { connect } from 'react-redux';
import List from 'common/components/List';
import Specialty from 'mentoring/containers/Specialty';
import { getSpecialties } from 'mentoring/actions';

function mapStateToProps(state) {
  return {
    item: Specialty,
    items: [...state.specialties],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getSpecialties()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

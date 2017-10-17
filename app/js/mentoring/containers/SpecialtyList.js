import { connect } from 'react-redux';
import List from 'components/general/List';
import { getSpecialties } from 'actions/specialties';
import Specialty from 'containers/mentoring/Specialty';

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

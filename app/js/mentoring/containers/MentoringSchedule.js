import { connect } from 'react-redux';
import Calendar from 'components/general/Calendar';
import { getShifts } from 'actions/shifts';

function mapStateToProps({ shifts }) {
  return {
    events: shifts,
    startAccessor: 'startDate',
    endAccessor: 'endDate',
    titleAccessor: 'fullName',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: (start, end) => dispatch(getShifts(start, end)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

import { connect } from 'react-redux';
import Calendar from 'common/components/Calendar';
import { getShifts } from 'mentoring/actions';

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

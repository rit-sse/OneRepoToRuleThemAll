import { connect } from 'react-redux';
import moment from 'moment';
import Grid from 'components/general/Grid';
import { getShifts } from 'actions/shifts';
import ShiftGridItem from 'components/mentoring/ShiftGridItem';

function mentorAuth({ officer }) {
  return !!officer && (officer.title === 'Mentoring Head' || officer.primaryOfficer);
}

function buildShifts(shifts, mentors) {
  const shiftArray = [];
  const weekdays = moment.weekdays().slice(1, -1);
  shiftArray.push([{ header: ' ' }].concat(weekdays.map(day => ({ header: day }))));
  const times = [
    '10:00:00',
    '12:00:00',
    '14:00:00',
    '16:00:00',
    '18:00:00',
  ];
  for (let i = 1; i < times.length; i++) { // eslint-disable-line no-plusplus
    const timeObj = {
      startTime: times[i - 1],
      endTime: times[i],
    };
    const array = [{ header: `${moment(timeObj.startTime, 'HH:mm:ss').format('h:mm A')} - ${moment(timeObj.endTime, 'HH:mm:ss').format('h:mm A')}` }];
    for (let j = 0; j < 5; j++) { // eslint-disable-line no-plusplus
      const shiftMentors = shifts[weekdays[j]][timeObj.startTime].map(shift => ({ shiftId: shift.id, ...mentors[shift.mentorId] }));
      array.push({ day: weekdays[j], mentors: shiftMentors, ...timeObj });
    }
    shiftArray.push(array);
  }

  return shiftArray;
}

function mapStateToProps({ auth, shifts, mentors }) {
  return {
    item: ShiftGridItem,
    items: buildShifts(shifts.byDay, mentors.all),
    itemProps: {
      loggedIn: mentorAuth(auth),
    },
    rowProps: {
      className: 'card-group',
    },
    gridProps: {
      className: 'shifts',
    },
    itemKeyPriority: ['day', 'header'],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(getShifts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

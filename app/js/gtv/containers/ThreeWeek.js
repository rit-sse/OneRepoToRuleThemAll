import { connect } from 'react-redux';
import moment from 'moment';
import ThreeWeek from 'gtv/components/ThreeWeek';

function formatEvents(events) {
  const formattedEvents = [[], [], []];

  // This is acceptable engineering because it's sitll O(n)
  for (let i = 0; i < 3; i++) { // eslint-disable-line no-plusplus
    for (let j = 0; j < 7; j++) { // eslint-disable-line no-plusplus
      formattedEvents[i][j] = {
        date: moment().day('sunday').add(i, 'weeks').add(j, 'days'),
        events: [],
      };
      events.forEach((event) => {
        if (formattedEvents[i][j].date.isSame(moment(event.startDate), 'day')) {
          formattedEvents[i][j].events.push(event);
        }
      });
    }
  }

  return formattedEvents;
}

function mapStateToProps(store) {
  return {
    events: formatEvents(store.gtv.threeWeek),
  };
}

export default connect(mapStateToProps)(ThreeWeek);

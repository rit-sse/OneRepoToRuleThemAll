import Moment from 'moment';
import { extendMoment } from 'moment-range/dist/moment-range';
import * as utils from 'utils/actions';

export const GTV = 'GTV';
export const NEXT_EVENT = 'NEXT_EVENT';
export const GET_THREE_WEEK_EVENTS = 'GET_THREE_WEEK_EVENTS';

const createAction = utils.createAction(GTV);
const loading = utils.createLoading(GTV);

const moment = extendMoment(Moment);

export function nextEvent() {
  return {
    type: NEXT_EVENT,
  };
}

export function getThreeWeekEvents() {
  return (dispatch, getState, { Events }) => {
    const sunday = moment().day('Sunday');
    const threeWeeksFromSunday = moment().day('Sunday').add(3, 'weeks');
    const range = moment.range(sunday, threeWeeksFromSunday).toString();
    const query = { between: range, sort: 'ASC' };
    dispatch(loading(GET_THREE_WEEK_EVENTS));
    Events.all(query, true)
      .then(data => dispatch(createAction(GET_THREE_WEEK_EVENTS, data)))
      .catch(err => dispatch(createAction(GET_THREE_WEEK_EVENTS, err)));
  };
}

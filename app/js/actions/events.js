import Moment from 'moment';
import { extendMoment } from 'moment-range/dist/moment-range';
import { scrollDone } from 'actions/scroll';
import * as utils from './utils';

export const EVENTS = 'EVENTS';
export const GET_EVENTS = 'GET_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DESTROY_EVENT = 'DESTROY_EVENT';

export const NEXT_EVENT = 'NEXT_EVENT';

export const GET_THREE_WEEK_EVENTS = 'GET_THREE_WEEK_EVENTS';

const createAction = utils.createAction(EVENTS);
const loading = utils.createLoading(EVENTS);

const moment = extendMoment(Moment);

export function nextEvent() {
  return {
    type: NEXT_EVENT,
  };
}

export function getEvents(getNext) {
  return (dispatch, getState, { Events }) => {
    if (getState().status.loading[GET_EVENTS]) return;
    dispatch(loading(GET_EVENTS));
    Events.next({ after: moment().startOf('hour').toISOString(), sort: 'ASC' })
      .then((data) => {
        if (data.length > 0) {
          dispatch(createAction(GET_EVENTS, { events: data, paged: getNext }));
        } else {
          dispatch(scrollDone());
          dispatch(createAction(GET_EVENTS, { events: [], paged: getNext }));
        }
      })
      .catch(err => dispatch(createAction(GET_EVENTS, err)));
  };
}

export function createEvent(event) {
  return (dispatch, getState, { Events }) => {
    dispatch(loading(CREATE_EVENT));
    Events.create(event)
      .then(data => dispatch(createAction(CREATE_EVENT, data)))
      .catch(err => dispatch(createAction(CREATE_EVENT, err)));
  };
}

export function updateEvent(id, event) {
  return (dispatch, getState, { Events }) => {
    dispatch(loading(UPDATE_EVENT));
    Events.update(id, event)
      .then(data => dispatch(createAction(UPDATE_EVENT, data)))
      .catch(err => dispatch(createAction(UPDATE_EVENT, err)));
  };
}

export function destoryEvent(id) {
  return (dispatch, getState, { Events }) => {
    dispatch(loading(DESTROY_EVENT));
    Events.destroy(id)
      .then(() => dispatch(createAction(DESTROY_EVENT, id)))
      .catch(err => dispatch(createAction(DESTROY_EVENT, err)));
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

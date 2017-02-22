import moment from 'moment';
import * as utils from './utils';

export const EVENTS = 'EVENTS';
export const GET_EVENTS = 'GET_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DESTROY_EVENT = 'DESTROY_EVENT';

export const CLEAR_EVENT = 'CLEAR_EVENT';
export const SELECT_EVENT = 'SELECT_EVENT';

export const GET_THREE_WEEK_EVENTS = 'GET_THREE_WEEK_EVENTS';

const createAction = utils.createAction(EVENTS);
const loading = utils.createLoading(EVENTS);

export function clearEvent() {
  return {
    type: CLEAR_EVENT,
  };
}

export function selectEvent(event) {
  return {
    type: SELECT_EVENT,
    payload: event,
  };
}

export function getEvents() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_EVENTS));
    api.Events.all({
      after: new Date(),
      sort: 'ASC',
    }).then(({ data }) => dispatch(createAction(GET_EVENTS, data)))
      .catch(err => dispatch(createAction(GET_EVENTS, err)));
  };
}

export function createEvent(event) {
  return (dispatch, getState, api) => {
    dispatch(loading(CREATE_EVENT));
    api.Events.create(event)
      .then(data => dispatch(createAction(CREATE_EVENT, data)))
      .catch(err => dispatch(createAction(CREATE_EVENT, err)));
  };
}

export function updateEvent(id, event) {
  return (dispatch, getState, api) => {
    dispatch(loading(UPDATE_EVENT));
    api.Events.update(id, event)
      .then(data => dispatch(createAction(UPDATE_EVENT, data)))
      .catch(err => dispatch(createAction(UPDATE_EVENT, err)));
  };
}

export function destoryEvent(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DESTROY_EVENT));
    api.Events.destroy(id)
      .then(() => dispatch(createAction(DESTROY_EVENT, id)))
      .catch(err => dispatch(createAction(DESTROY_EVENT, err)));
  };
}

export function getThreeWeekEvents() {
  const sunday = moment().day('Sunday');
  const monthFromSunday = moment().day('Sunday').add(1, 'Month');
  const query = { before: monthFromSunday.toDate(), after: sunday.toDate(), sort: 'ASC' };
  return (dispatch, getState, api) => {
    dispatch(loading(GET_THREE_WEEK_EVENTS));
    api.Events.all(query, true)
      .then(({ data }) => dispatch(createAction(GET_THREE_WEEK_EVENTS, data)))
      .catch(err => dispatch(createAction(GET_THREE_WEEK_EVENTS, err)));
  };
}

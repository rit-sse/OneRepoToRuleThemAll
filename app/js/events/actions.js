import Moment from 'moment';
import { scrollDone } from 'actions/scroll';
import { extendMoment } from 'moment-range/dist/moment-range';
import { createAction, createLoading } from 'utils/actions.js';

export const EVENTS = 'EVENTS';
export const GET_EVENTS = 'GET_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DESTROY_EVENT = 'DESTROY_EVENT';

const createAction = createAction(EVENTS);
const loading = createLoading(EVENTS);
const moment = extendMoment(Moment);

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

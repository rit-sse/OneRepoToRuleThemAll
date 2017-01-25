export const EVENTS = 'EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DESTROY_EVENT = 'DESTROY_EVENT';

const createAction = require('./utils').createAction(EVENTS);
const loading = require('./utils').createLoading(EVENTS);

export function getEvent() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_EVENT));
    api.Events.all({
      after: new Date(),
      sort: 'ASC',
    }).then(({ data }) => dispatch(createAction(GET_EVENT, data)))
      .catch(err => dispatch(createAction(GET_EVENT, err)));
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

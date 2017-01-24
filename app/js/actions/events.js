export const GET_EVENT = 'GET_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DESTROY_EVENT = 'DESTROY_EVENT';

function getEventAction(payload, error = false) {
  return {
    type: GET_EVENT,
    payload,
    error,
  };
}

function createEventAction(payload, error = false) {
  return {
    type: CREATE_EVENT,
    payload,
    error,
  };
}

function updateEventAction(payload, error = false) {
  return {
    type: UPDATE_EVENT,
    payload,
    error,
  };
}

function destoryEventAction(payload, error = false) {
  return {
    type: DESTROY_EVENT,
    payload,
    error,
  };
}

export function getEvent() {
  return (dispatch, getState, api) => {
    api.Events.all({
      after: new Date(),
      sort: 'ASC',
    }).then(({ data }) => dispatch(getEventAction(data)))
      .catch(err => dispatch(getEventAction(err, true)));
  };
}

export function createEvent(event) {
  return (dispatch, getState, api) => {
    api.Events.create(event)
      .then(data => dispatch(createEventAction(data)))
      .catch(err => dispatch(createEventAction(err, true)));
  };
}

export function updateEvent(id, event) {
  return (dispatch, getState, api) => {
    api.Events.update(id, event)
      .then(data => dispatch(updateEventAction(data)))
      .catch(err => dispatch(updateEventAction(err, true)));
  };
}

export function destoryEvent(id) {
  return (dispatch, getState, api) => {
    api.Events.destroy(id)
      .then(() => dispatch(destoryEventAction(id)))
      .catch(err => dispatch(destoryEventAction(err, true)));
  };
}

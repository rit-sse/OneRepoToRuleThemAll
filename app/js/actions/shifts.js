import * as utils from './utils';

export const SHIFTS = 'SHIFTS';
export const GET_SHIFTS = 'SHIFTS';
export const CREATE_SHIFT = 'CREATE_SHIFT';
export const UPDATE_SHIFT = 'UPDATE_SHIFT';
export const DESTROY_SHIFT = 'DESTROY_SHIFT';

export const SET_MODE = 'SET_MODE';

export const EDIT_MODE = 'EDIT';
export const VIEW_MODE = 'VIEW';


const createAction = utils.createAction(SHIFTS);
const loading = utils.createLoading(SHIFTS);

export function getShifts() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_SHIFTS));
    api.Shifts.all({ active: new Date() }, true)
      .then(data => dispatch(createAction(GET_SHIFTS, data)))
      .catch(err => dispatch(createAction(GET_SHIFTS, err)));
  };
}

export function createShift(mentor) {
  return (dispatch, getState, api) => {
    dispatch(loading(CREATE_SHIFT));
    api.Shifts.create(mentor)
      .then(data => dispatch(createAction(CREATE_SHIFT, data)))
      .catch(err => dispatch(createAction(CREATE_SHIFT, err)));
  };
}

export function updateShift(id, mentor) {
  return (dispatch, getState, api) => {
    dispatch(loading(UPDATE_SHIFT));
    api.Shifts.create(id, mentor)
      .then(data => dispatch(createAction(UPDATE_SHIFT, data)))
      .catch(err => dispatch(createAction(UPDATE_SHIFT, err)));
  };
}

export function destroyShift(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DESTROY_SHIFT));
    api.Shifts.create(id)
      .then(() => dispatch(createAction(DESTROY_SHIFT, id)))
      .catch(err => dispatch(createAction(DESTROY_SHIFT, err)));
  };
}

export function setMode(mode) {
  return {
    type: SET_MODE,
    payload: {
      mode,
    },
  };
}

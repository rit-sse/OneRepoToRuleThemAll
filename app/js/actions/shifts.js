import * as utils from './utils';

export const SHIFTS = 'SHIFTS';
export const GET_SHIFTS = 'GET_SHIFTS';
export const CREATE_SHIFT = 'CREATE_SHIFT';
export const UPDATE_SHIFT = 'UPDATE_SHIFT';
export const DESTROY_SHIFT = 'DESTROY_SHIFT';

const createAction = utils.createAction(SHIFTS);
const loading = utils.createLoading(SHIFTS);

export function getShifts() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_SHIFTS));
    return api.Shifts.all({ active: new Date() }, true)
      .then(data => dispatch(createAction(GET_SHIFTS, data)))
      .catch(err => dispatch(createAction(GET_SHIFTS, err)));
  };
}

export function createShift(shift) {
  return (dispatch, getState, api) => {
    dispatch(loading(CREATE_SHIFT));
    return api.Shifts.create(shift)
      .then(data => dispatch(createAction(CREATE_SHIFT, data)))
      .catch(err => dispatch(createAction(CREATE_SHIFT, err)));
  };
}

export function updateShift(id, shift) {
  return (dispatch, getState, api) => {
    dispatch(loading(UPDATE_SHIFT));
    const oldShift = getState().shifts.byId[id];
    return api.Shifts.update(id, shift)
      .then(data => dispatch(createAction(UPDATE_SHIFT, { shift: data, oldShift })))
      .catch(err => dispatch(createAction(UPDATE_SHIFT, err)));
  };
}

export function destroyShift(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DESTROY_SHIFT));
    const shift = getState().shifts.byId[id];
    return api.Shifts.destroy(shift.id)
      .then(() => dispatch(createAction(DESTROY_SHIFT, shift)))
      .catch(err => dispatch(createAction(DESTROY_SHIFT, err)));
  };
}

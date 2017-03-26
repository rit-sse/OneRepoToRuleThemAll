import * as utils from './utils';

export const SHIFTS = 'SHIFTS';
export const GET_SHIFTS = 'GET_SHIFTS';

const createAction = utils.createAction(SHIFTS);
const loading = utils.createLoading(SHIFTS);

export function getShifts(startTime, endTime) {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_SHIFTS));
    return api.Shifts.all({ startTime, endTime })
      .then(data => dispatch(createAction(GET_SHIFTS, data)))
      .catch(err => dispatch(createAction(GET_SHIFTS, err)));
  };
}

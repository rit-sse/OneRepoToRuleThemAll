import * as utils from 'utils/actions';

export const SHIFTS = 'SHIFTS';
export const GET_SHIFTS = 'GET_SHIFTS';

const createAction = utils.createAction(SHIFTS);
const loading = utils.createLoading(SHIFTS);

export function getShifts(startTime, endTime) {
  return (dispatch, getState, { Shifts }) => {
    dispatch(loading(GET_SHIFTS));
    return Shifts.all({ startTime, endTime })
      .then(data => dispatch(createAction(GET_SHIFTS, data)))
      .catch(err => dispatch(createAction(GET_SHIFTS, err)));
  };
}

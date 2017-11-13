import * as utils from 'utils/actions';

export const SPECIALTIES = 'SPECIALTIES';
export const GET_SPECIALTIES = 'GET_SPECIALTIES';

const createAction = utils.createAction(SPECIALTIES);
const loading = utils.createLoading(SPECIALTIES);

export function getSpecialties() {
  return (dispatch, getState, { Specialties }) => {
    dispatch(loading(GET_SPECIALTIES));
    return Specialties.all({ active: new Date() }, true)
      .then(data => dispatch(createAction(GET_SPECIALTIES, data)))
      .catch(err => dispatch(createAction(GET_SPECIALTIES, err)));
  };
}

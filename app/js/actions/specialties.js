import * as utils from './utils';

export const SPECIALTIES = 'SPECIALTIES';
export const GET_SPECIALTIES = 'GET_SPECIALTIES';

const createAction = utils.createAction(SPECIALTIES);
const loading = utils.createLoding(SPECIALTIES);

export function getSpecialties() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_SPECIALTIES));
    api.Specialties.all({}, true)
      .then(data => dispatch(createAction(GET_SPECIALTIES, data)))
      .catch(err => dispatch(createAction(GET_SPECIALTIES, err)));
  };
}

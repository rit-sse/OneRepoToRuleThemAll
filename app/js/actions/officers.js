import * as utils from './utils';

export const OFFICERS = 'OFFICERS';
export const GET_OFFICERS = 'GET_OFFICERS';
export const CREATE_OFFICER = 'CREATE_OFFICER';
export const UPDATE_OFFICER = 'UPDATE_OFFICER';
export const DESTROY_OFFICER = 'DESTROY_OFFICER';

const createAction = utils.createAction(OFFICERS);
const loading = utils.createLoading(OFFICERS);

export function getOfficers() {
  return (dispatch, getState, { Officers }) => {
    dispatch(loading(GET_OFFICERS));
    Officers.all({ active: new Date() }, true)
      .then(data => dispatch(createAction(GET_OFFICERS, data)))
      .catch(err => dispatch(createAction(GET_OFFICERS, err)));
  };
}

export function createOfficer({ user, ...officer }) {
  return (dispatch, getState, { Officers, Users }) => {
    dispatch(loading(CREATE_OFFICER));
    return Users.update(user.dce, user)
      .then(() => Officers.create(officer))
      .then(data => dispatch(createAction(CREATE_OFFICER, data)))
      .catch(err => dispatch(createAction(CREATE_OFFICER, err)));
  };
}

export function updateOfficer(id, { user, ...officer }) {
  return (dispatch, getState, { Officers, Users }) => {
    dispatch(loading(UPDATE_OFFICER));
    return Users.update(user.dce, user)
      .then(() => Officers.update(id, officer))
      .then(data => dispatch(createAction(UPDATE_OFFICER, data)))
      .catch(err => dispatch(createAction(UPDATE_OFFICER, err)));
  };
}


export function destroyOfficer(id) {
  return (dispatch, getState, { Officers }) => {
    dispatch(loading(DESTROY_OFFICER));
    Officers.destroy(id)
      .then(() => dispatch(createAction(DESTROY_OFFICER, id)))
      .catch(err => dispatch(createAction(DESTROY_OFFICER, err)));
  };
}

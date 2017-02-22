export const COMMITTEES = 'COMMITTEES';
export const GET_COMMITTEES = 'GET_COMMITTEES';
export const CREATE_COMMITTEE = 'CREATE_COMMITTEE';
export const UPDATE_COMMITTEE = 'UPDATE_COMMITTEE';
export const DESTROY_COMMITTEE = 'DESTROY_COMMITTEE';


const createAction = require('./utils').createAction(COMMITTEES);
const loading = require('./utils').createLoading(COMMITTEES);

export function getCommittees() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_COMMITTEES));
    api.Committees.all({ active: new Date() }, true)
      .then(({ data }) => dispatch(createAction(GET_COMMITTEES, data)))
      .catch(err => dispatch(createAction(GET_COMMITTEES, err)));
  };
}

export function createCommittee(committee) {
  return (dispatch, getState, api) => {
    dispatch(loading(CREATE_COMMITTEE));
    api.Committees.create(committee)
      .then(({ data }) => dispatch(createAction(CREATE_COMMITTEE, data)))
      .catch(err => dispatch(createAction(CREATE_COMMITTEE, err)));
  };
}

export function updateCommittee(id, committee) {
  return (dispatch, getState, api) => {
    dispatch(loading(UPDATE_COMMITTEE));
    api.Committees.update(id, committee)
      .then(({ data }) => dispatch(createAction(UPDATE_COMMITTEE, data)))
      .catch(err => dispatch(createAction(UPDATE_COMMITTEE, err)));
  };
}

export function destoryCommittee(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DESTROY_COMMITTEE));
    api.Committees.destroy(id)
      .then(() => dispatch(createAction(DESTROY_COMMITTEE, id)))
      .catch(err => dispatch(createAction(DESTROY_COMMITTEE, err)));
  };
}

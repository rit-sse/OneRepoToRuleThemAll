import moment from 'moment';
import * as utils from './utils';

export const MENTORS = 'MENTORS';
export const GET_MENTORS = 'GET_MENTORS';
export const CREATE_MENTOR = 'CREATE_MENTOR';
export const UPDATE_MENTOR = 'UPDATE_MENTOR';
export const DESTROY_MENTOR = 'DESTROY_MENTOR';

export const GET_MENTOR_ON_DUTY = 'GET_MENTOR_ON_DUTY';

const createAction = utils.createAction(MENTORS);
const loading = utils.createLoading(MENTORS);

export function getMentors() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_MENTORS));
    return api.Mentors.all({ active: new Date() }, true)
      .then(data => dispatch(createAction(GET_MENTORS, data)))
      .catch(err => dispatch(createAction(GET_MENTORS, err)));
  };
}

export function createMentor({ user, ...mentor }) {
  return (dispatch, getState, api) => {
    dispatch(loading(CREATE_MENTOR));
    return api.Users.update(user.dce, user)
      .then(() => api.Mentors.create(mentor))
      .then(data => dispatch(createAction(CREATE_MENTOR, data)))
      .catch(err => dispatch(createAction(CREATE_MENTOR, err)));
  };
}

export function updateMentor(id, { user, ...mentor }) {
  return (dispatch, getState, api) => {
    dispatch(loading(UPDATE_MENTOR));
    return api.Users.update(user.dce, user)
      .then(() => api.Mentors.update(id, mentor))
      .then(data => dispatch(createAction(UPDATE_MENTOR, data)))
      .catch(err => dispatch(createAction(UPDATE_MENTOR, err)));
  };
}

export function destroyMentor(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DESTROY_MENTOR));
    return api.Mentors.destroy(id)
      .then(() => dispatch(createAction(DESTROY_MENTOR, id)))
      .catch(err => dispatch(createAction(DESTROY_MENTOR, err)));
  };
}

export function getMentorOnDuty() {
  return (dispatch, getState, api) => {
    const day = moment().format('dddd');
    const time = moment().format('HH:mm');
    const active = new Date();
    dispatch(loading(GET_MENTOR_ON_DUTY));
    return api.Mentors.all({ active, day, time }, true)
      .then(data => dispatch(createAction(GET_MENTOR_ON_DUTY, data)))
      .catch(err => dispatch(createAction(GET_MENTOR_ON_DUTY, err)));
  };
}

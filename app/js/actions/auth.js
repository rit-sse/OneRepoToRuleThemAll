import * as utils from './utils';

export const AUTH = 'AUTH';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const createAction = utils.createAction(AUTH);

export function signIn(googleUser) {
  return (dispatch, getState, api) => {
    const info = {
      token: googleUser.getAuthResponse().id_token,
      id: googleUser.getBasicProfile().getEmail().split('@')[0],
    };
    return api.Auth.getToken('google', info.id, info.token)
      .then(() => Promise.all([api.Users.one(info.id), api.Officers.all({ active: new Date() }, true)]))
      .then((data) => {
        const [user, officers] = data;
        const officer = officers.data.find(o => o.userDce === user.dce);
        return dispatch(createAction(SIGN_IN, {
          officer,
        }));
      })
      .catch(error => dispatch(createAction(SIGN_IN, error)));
  };
}

export function checkLogin() {
  return (dispatch, getState, api) => {
    return api.Auth.checkToken().then((user) => {
      return api.Officers.all({ primary: true, active: new Date() }, true).then(({ data }) => {
        const oIndex = data.map(o => o.userDce).indexOf(user.dce);
        if (oIndex !== -1) {
          return data[oIndex];
        }
        return Promise.reject({ message: 'Need to be an primary officer to log in' });
      });
    })
      .then(officer => dispatch(createAction(SIGN_IN, { officer })))
      .catch(() => dispatch(createAction(SIGN_OUT)));
  };
}

export function signOut() {
  return (dispatch, getState, api) => Promise
    .all([api.Auth.signOut(), gapi.auth2.getAuthInstance().signOut()])
    .then(() => dispatch(createAction(SIGN_OUT)))
    .catch(error => dispatch(createAction(SIGN_OUT, error)));
}

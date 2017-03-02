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
        const officer = officers.data.find(o => o.userDce === user.dce) || {};
        return dispatch(createAction(SIGN_IN, {
          user,
          officer,
        }));
      })
      .catch(error => dispatch(createAction(SIGN_IN, error)));
  };
}

export function checkLogin() {
  return (dispatch, getState, api) => {
    return api.Auth.checkToken().then((user) => {
      return api.Officers.all({ active: new Date() }, true).then(({ data }) => {
        const officer = data.find(o => o.userDce === user.dce) || {};
        return {
          user,
          officer,
        };
      });
    })
      .then(user => dispatch(createAction(SIGN_IN, user)))
      .catch(() => dispatch(createAction(SIGN_OUT)));
  };
}

export function signOut() {
  return (dispatch, getState, api) => Promise
    .all([api.Auth.signOut(), gapi.auth2.getAuthInstance().signOut()])
    .then(() => dispatch(createAction(SIGN_OUT)))
    .catch(error => dispatch(createAction(SIGN_OUT, error)));
}

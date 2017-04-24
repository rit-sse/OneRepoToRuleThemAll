import * as utils from './utils';

export const AUTH = 'AUTH';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const createAction = utils.createAction(AUTH);

export function signIn(googleUser) {
  return (dispatch, getState, { Auth, Users, Officers }) => {
    const info = {
      token: googleUser.getAuthResponse().id_token,
      id: googleUser.getBasicProfile().getEmail().split('@')[0],
    };
    return Auth.getToken('google', info.id, info.token)
      .then(() => Promise.all([Users.one(info.id), Officers.all({ active: new Date() }, true)]))
      .then((data) => {
        const [user, officers] = data;
        const officer = officers.data.find(o => o.userDce === user.dce);
        if (officer) return dispatch(createAction(SIGN_IN, { user, officer }, `Logged in as ${officer.primaryOfficer ? 'primary ' : ''}officer`));

        else if (user) return dispatch(createAction(SIGN_IN, { user }, 'Logged in as member'));
        return dispatch(createAction(SIGN_IN, new Error('Must be a member to login')));
      })
      .catch(error => dispatch(createAction(SIGN_IN, error)));
  };
}

export function checkLogin() {
  return (dispatch, getState, { Auth, Officers }) => {
    return Auth.checkToken().then((user) => {
      return Officers.all({ active: new Date() }, true).then(({ data }) => {
        const officer = data.find(o => o.userDce === user.dce);
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
  return (dispatch, getState, { Auth }) => Promise
    .all([Auth.signOut(), gapi.auth2.getAuthInstance().signOut()])
    .then(() => dispatch(createAction(SIGN_OUT)))
    .catch(error => dispatch(createAction(SIGN_OUT, error)));
}

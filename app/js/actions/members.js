import moment from 'moment';
import * as utils from './utils';

export const MEMBERS = 'MEMBERS';
export const GET_MEMBERS = 'GET_MEMBERS';
export const ADD_MEMBERSHIP = 'ADD_MEMBERSHIP';
export const APPROVE_MEMBERSHIP = 'APPROVE_MEMBERSHIP';
export const DENY_MEMBERSHIP = 'DENY_MEMBERSHIP';

const createAction = utils.createAction(MEMBERS);
const loading = utils.createLoading(MEMBERS);

export function getMembers(active = moment().toISOString()) {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_MEMBERS));
    api.Memberships.all({ active }, true)
      .then(a => a.data)
      .then(memberships => memberships.reduce((members, membership) => {
        return {
          ...members,
          [membership.userDce]: {
            ...(members[membership.userDce] || {
              name: `${membership.user.firstName} ${membership.user.lastName}`,
            }),
            count: ((members[membership.userDce] || {}).count + 1 || 1),
            memberships: [
              ...((members[membership.userDce] || {}).memberships || []),
              { reason: membership.reason, committeeName: membership.committeeName },
            ],
          },
        };
      }, {}))
      .then(memberships => dispatch(createAction(GET_MEMBERS, memberships)))
      .catch(err => dispatch(createAction(GET_MEMBERS, err)));
  };
}

export function addMembership(user, ...membership) {
  return (dispatch, getState, api) => {
    dispatch(loading(ADD_MEMBERSHIP));
    return api.Users.update(user.dce, user)
      .then(api.Memberships.create(membership))
      .then(member => dispatch(ADD_MEMBERSHIP, member))
      .catch(err => dispatch(ADD_MEMBERSHIP, err));
  };
}

export function approveMembership(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(APPROVE_MEMBERSHIP));
    return api.Memberships.update(id, { approved: true })
      .then(() => dispatch(createAction(APPROVE_MEMBERSHIP, id)))
      .catch(err => dispatch(createAction(APPROVE_MEMBERSHIP, err)));
  };
}

export function denyMembership(id) {
  return (dispatch, getState, api) => {
    dispatch(loading(DENY_MEMBERSHIP));
    return api.Memberships.update(id, { approved: false })
      .then(() => dispatch(createAction(DENY_MEMBERSHIP, id)))
      .catch(err => dispatch(createAction(DENY_MEMBERSHIP, err)));
  };
}

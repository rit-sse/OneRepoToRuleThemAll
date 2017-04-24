import moment from 'moment';
import * as utils from './utils';

export const MEMBERS = 'MEMBERS';
export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERSHIPS = 'GET_MEMBERSHIPS';
export const ADD_MEMBERSHIP = 'ADD_MEMBERSHIP';
export const APPROVE_MEMBERSHIP = 'APPROVE_MEMBERSHIP';
export const DENY_MEMBERSHIP = 'DENY_MEMBERSHIP';

const createAction = utils.createAction(MEMBERS);
const loading = utils.createLoading(MEMBERS);

export function getMembers(active = moment().toISOString()) {
  return (dispatch, getState, { Memberships }) => {
    dispatch(loading(GET_MEMBERS));
    Memberships.all({ active }, true)
      .then(a => a.data)
      .then(memberships => memberships.reduce((members, membership) => {
        return {
          ...members,
          [membership.userDce]: {
            ...(members[membership.userDce] || {
              name: `${membership.user.firstName} ${membership.user.lastName}`,
            }),
            id: membership.userDce,
            count: ((members[membership.userDce] || {}).count + 1 || 1),
            memberships: [
              ...((members[membership.userDce] || {}).memberships || []),
              {
                reason: membership.reason,
                committeeName: membership.committeeName,
                startDate: membership.startDate,
                endDate: membership.endDate,
              },
            ],
          },
        };
      }, {}))
      .then(memberships => dispatch(createAction(GET_MEMBERS, memberships)))
      .catch(err => dispatch(createAction(GET_MEMBERS, err)));
  };
}

export function getMemberships() {
  return (dispatch, getState, { Memberships }) => {
    dispatch(loading(GET_MEMBERSHIPS));
    Memberships.all({ approved: 'null' }, true)
      .then(({ data }) => dispatch(createAction(GET_MEMBERSHIPS, data)))
      .catch(err => dispatch(createAction(GET_MEMBERSHIPS, err)));
  };
}

export function addMembership(user, membership) {
  return (dispatch, getState, { Users, Memberships }) => {
    dispatch(loading(ADD_MEMBERSHIP));
    return Users.update(user.dce, user)
      .then(Memberships.create(membership))
      .then(member => dispatch(createAction(ADD_MEMBERSHIP, member, `Membership added for ${user.dce}`)))
      .catch(err => dispatch(createAction(ADD_MEMBERSHIP, err)));
  };
}

export function approveMembership(id) {
  return (dispatch, getState, { Memberships }) => {
    dispatch(loading(APPROVE_MEMBERSHIP));
    return Memberships.update(id, { approved: true })
      .then(() => dispatch(createAction(APPROVE_MEMBERSHIP, id)))
      .catch(err => dispatch(createAction(APPROVE_MEMBERSHIP, err)));
  };
}

export function denyMembership(id) {
  return (dispatch, getState, { Memberships }) => {
    dispatch(loading(DENY_MEMBERSHIP));
    return Memberships.update(id, { approved: false })
      .then(() => dispatch(createAction(DENY_MEMBERSHIP, id)))
      .catch(err => dispatch(createAction(DENY_MEMBERSHIP, err)));
  };
}

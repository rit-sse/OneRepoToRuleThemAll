import moment from 'moment';
import * as utils from 'utils/actions';

// We name this 'USERS' to prevent naming conflicts w/ scoreboard
export const USERS = 'USERS';
// We name this 'FETCH_USER' to prevent naming conflicts w/ common
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USERS = 'FETCH_USERS';

const createAction = utils.createAction(USERS);
const loading = utils.createLoading(USERS);

export function getUser(dce) {
  return (dispatch, getState, { Users, Officers }) => {
    dispatch(loading(FETCH_USER));
    Promise.all([
      Officers.all({ user: dce, active: moment().toISOString() }),
      Users.one(dce),
    ])
    .then((data) => {
      const officer = data[0][0]; // Get the first item if it exists
      const user = data[1];
      return {
        ...user,
        officer,
      };
    })
    .then(data => dispatch(createAction(FETCH_USER, data)))
    .catch(err => dispatch(createAction(FETCH_USER, err)));
  };
}

export function getUsers() {
  return (dispatch, getState, { Users }) => {
    dispatch(loading(FETCH_USERS));
    Users.all()
      // Sort by dce alphabetically
      .then(data => data.sort((a, b) => {
        const dceA = a.dce;
        const dceB = b.dce;

        if (dceA < dceB) return -1;
        if (dceA > dceB) return 1;
        return 0;
      }))
      .then(data => dispatch(createAction(FETCH_USERS, data)))
      .catch(err => dispatch(createAction(FETCH_USERS, err)));
  };
}

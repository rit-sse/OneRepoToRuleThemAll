import * as utils from 'utils/actions';

export const USER = 'USER';
export const GET_USER = 'GET_USER';

const createAction = utils.createAction(USER);
const loading = utils.createLoading(USER);

export function getUser(dce) {
  return (dispatch, getState, { Users }) => {
    dispatch(loading(GET_USER));
    Users.one(dce)
      .then(data => dispatch(createAction(GET_USER, data)))
      .catch(err => dispatch(createAction(GET_USER, err, undefined, true)));
  };
}

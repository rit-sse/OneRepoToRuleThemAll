import * as utils from './utils';

export const COMMITTEES = 'COMMITTEES';
export const GET_COMMITTEES = 'GET_COMMITTEES';

const createAction = utils.createAction(COMMITTEES);
const loading = utils.createLoading(COMMITTEES);

export function getCommittees() {
  return (dispatch, getState, api) => {
    dispatch(loading(GET_COMMITTEES));
    api.Committees.all({ active: new Date() }, true)
      .then(({ data }) => dispatch(createAction(GET_COMMITTEES, data)))
      .catch(err => dispatch(createAction(GET_COMMITTEES, err)));
  };
}

import * as utils from './utils';

export const TAGS = 'TAGS';
export const GET_TAGS = 'GET_TAGS';

const createAction = utils.createAction(TAGS);
const loading = utils.createLoading(TAGS);

export function getTags() {
  return (dispatch, getState, { Tags }) => {
    dispatch(loading(GET_TAGS));
    Tags.all()
      .then(tags => tags.data.map(tag => tag.name))
      .then(tags => dispatch(createAction(GET_TAGS, tags)))
      .catch(err => dispatch(createAction(GET_TAGS, err)));
  };
}

import * as utils from './utils';

export const GO = 'GO';
export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_PAGE = 'GET_LINKS_PAGE';

const createAction = utils.createAction(GO);
const loading = utils.createLoading(GO);

export function getLinks(getNext = true) {
  return (dispatch, getState, { Links }) => {
    if (getNext) {
      dispatch(loading(GET_LINKS_PAGE));
      const page = getState().go.pagination.currentPage + 1;
      Links.all({
        sort: 'DESC',
        page,
      }).then(data => dispatch(createAction(GET_LINKS_PAGE, data)))
        .catch(err => dispatch(createAction(GET_LINKS_PAGE, err)));
    } else {
      Links.all({
        sort: 'DESC',
      }).then(data => dispatch(createAction(GET_LINKS, data)))
        .catch(err => dispatch(createAction(GET_LINKS, err)));
    }
  };
}

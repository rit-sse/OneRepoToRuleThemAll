import {
  createAction as createCreateAction,
  createLoading,
} from './utils';

export const GO = 'GO';
export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_PAGES = 'GET_LINKS_PAGES';
export const SET_PAGE_COUNT = 'SET_PAGE_COUNT';
export const SET_PAGE = 'SET_PAGE';

// Creates a wrapper for the loading indications
const createAction = createCreateAction(GO);
const loading = createLoading(GO);

export function getLinks(getNext = true) { // eslint-disable-line no-unused-vars
  return (dispatch, getState, api) => {
    dispatch(loading(GET_LINKS_PAGES));
    if (!getNext) {
      dispatch(createAction(SET_PAGE, 1));
    }
    api.Links.all({
      sort: 'DESC',
      page: getState().go.page,
    })
    .then(links => {
      dispatch(createAction(SET_PAGE_COUNT, Math.ceil(links.total / links.perPage)))
      dispatch(createAction(GET_LINKS_PAGES, links.data))
    })
    .catch(err => dispatch(createAction(GET_LINKS, err)));
  };
}

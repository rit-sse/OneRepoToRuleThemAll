import * as utils from './utils';

export const GO = 'GO';
export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_PAGE = 'GET_LINKS_PAGE';
export const CREATE_LINK = 'CREATE_LINK';
export const UPDATE_LINK = 'UPDATE_LINK';
export const DESTORY_LINK = 'DESTORY_LINK';

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
      dispatch(loading(GET_LINKS));
      Links.all({
        sort: 'DESC',
      }).then(data => dispatch(createAction(GET_LINKS, data)))
        .catch(err => dispatch(createAction(GET_LINKS, err)));
    }
  };
}

export function createLink(link) {
  return (dispatch, getState, { Links }) => {
    Links.one(link.shortLink)
      .then(() => {
        dispatch(loading(UPDATE_LINK));
        Links.update(link.shortLink, link)
          .then(data => dispatch(createAction(UPDATE_LINK, data)))
          .catch(err => dispatch(createAction(UPDATE_LINK, err)));
      })
      .catch(() => {
        dispatch(loading(CREATE_LINK));
        Links.create(link)
          .then(data => dispatch(createAction(CREATE_LINK, data)))
          .catch(err => dispatch(createAction(CREATE_LINK, err)));
      });
  };
}

export function updateLink(id, link) {
  return (dispatch, getState, { Links }) => {
    dispatch(loading(UPDATE_LINK));
    Links.update(id, link)
      .then(data => dispatch(createAction(UPDATE_LINK, data)))
      .catch(err => dispatch(createAction(UPDATE_LINK, err)));
  };
}

export function destoryLink(id) {
  return (dispatch, getState, { Links }) => {
    dispatch(loading(DESTORY_LINK));
    Links.destroy(id)
      .then(() => dispatch(createAction(DESTORY_LINK, id)))
      .catch(err => dispatch(createAction(DESTORY_LINK, err)));
  };
}

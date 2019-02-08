import { scrollDone } from 'common/actions';
import * as utils from 'utils/actions';
import cloneDeep from 'lodash/cloneDeep';

export const GO = 'GO';
export const GET_LINKS = 'GET_LINKS';
export const GET_PUBLIC_LINKS = 'GET_PUBLIC_LINKS';
export const CREATE_LINK = 'CREATE_LINK';
export const UPDATE_LINK = 'UPDATE_LINK';
export const DESTORY_LINK = 'DESTORY_LINK';
export const CHECK_LINK = 'CHECK_LINK';

const createAction = utils.createAction(GO);
const loading = utils.createLoading(GO);

export function getLinks(getNext, auth) {
  console.log(auth);
  return (dispatch, getState, { Links }) => {
    if (getState().status.loading[GET_LINKS]) return;
    dispatch(loading(GET_LINKS));
    Links.next({ sort: 'DESC' })
      .then((data) => {
        const dataPublic = cloneDeep(data);
        console.log("Data " + data);
        console.log("dataPublic" + dataPublic);
        console.log(data === dataPublic);
        if (data.length > 0) {
          dispatch(createAction(GET_LINKS, { links: data, paged: getNext }));
          dispatch(createAction(GET_PUBLIC_LINKS, { links: dataPublic, paged: getNext }));
        } else {
          dispatch(scrollDone());
          dispatch(createAction(GET_LINKS, { links: [], paged: getNext }));
          dispatch(createAction(GET_PUBLIC_LINKS, { links: [], paged: getNext }));
        }
      })
      .catch(err => dispatch(createAction(GET_LINKS, err)));
  };
}

export function checkLink(link) {
  return (dispatch, getState, { Links }) => {
    Links.one(link)
      .then(() => dispatch(createAction(CHECK_LINK, true)))
      .catch(() => dispatch(createAction(CHECK_LINK, false)));
  };
}

export function createLink(link) {
  return (dispatch, getState, { Links }) => {
    dispatch(loading(CREATE_LINK));
    Links.create(link)
      .then(data => dispatch(createAction(CREATE_LINK, data)))
      .catch(err => dispatch(createAction(CREATE_LINK, err)));
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

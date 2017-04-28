import * as utils from './utils';

export const QUOTES = 'QUOTES';
export const GET_QUOTES = 'GET_QUOTES';
export const GET_QUOTE_PAGE = 'GET_QUOTE_PAGE';
export const APPROVE_QUOTE = 'APPROVE_QUOTE';
export const CREATE_QUOTE = 'CREATE_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DESTROY_QUOTE = 'DESTROY_QUOTE';

const createAction = utils.createAction(QUOTES);
const loading = utils.createLoading(QUOTES);

export function getQuotes(getNext, tag, search, approved = true) {
  return (dispatch, getState, { Quotes }) => {
    if (getNext) {
      if (getState().status.loading[GET_QUOTES] || getState().status.loading[GET_QUOTE_PAGE]) return;
      dispatch(loading(GET_QUOTE_PAGE));
      const page = getState().quotes.pagination.currentPage + 1;
      Quotes.all({ page, tag, approved, search })
        .then(data => dispatch(createAction(GET_QUOTE_PAGE, data)))
        .catch(err => dispatch(createAction(GET_QUOTE_PAGE, err)));
    } else {
      dispatch(loading(GET_QUOTES));
      Quotes.all({
        tag,
        approved,
        search,
      }).then(data => dispatch(createAction(GET_QUOTES, data)))
        .catch(err => dispatch(createAction(GET_QUOTES, err)));
    }
  };
}

export function approveQuote(id) {
  return (dispatch, getState, { Quotes }) => {
    dispatch(loading(APPROVE_QUOTE));
    Quotes.update(id, { approved: true })
      .then(() => dispatch(createAction(APPROVE_QUOTE, id)))
      .catch(err => dispatch(createAction(APPROVE_QUOTE, err)));
  };
}

export function createQuote(quote) {
  return (dispatch, getState, { Quotes }) => {
    dispatch(loading(CREATE_QUOTE));
    Quotes.create(quote)
      .then(data => dispatch(createAction(CREATE_QUOTE, data, 'Quote created waiting for approval')))
      .catch(err => dispatch(createAction(CREATE_QUOTE, err)));
  };
}

export function updateQuote(id, quote) {
  return (dispatch, getState, { Quotes }) => {
    dispatch(loading(UPDATE_QUOTE));
    Quotes.update(id, quote)
      .then(data => dispatch(createAction(UPDATE_QUOTE, data)))
      .catch(err => dispatch(createAction(UPDATE_QUOTE, err)));
  };
}

export function destoryQuote(id) {
  return (dispatch, getState, { Quotes }) => {
    dispatch(loading(DESTROY_QUOTE));
    Quotes.destroy(id)
      .then(() => dispatch(createAction(DESTROY_QUOTE, id)))
      .catch(err => dispatch(createAction(DESTROY_QUOTE, err)));
  };
}

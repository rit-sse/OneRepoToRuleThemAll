import * as utils from './utils';

export const QUOTES = 'QUOTES';
export const GET_QUOTES = 'GET_QUOTES';
export const GET_QUOTE_PAGE = 'GET_QUOTE_PAGE';
export const APPROVE_QUOTE = 'APPROVE_QUOTE';
export const CREATE_QUOTE = 'CREATE_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DESTROY_QUOTE = 'DESTROY_QUOTE';

const createAction = utils.createAction(QUOTES);
// const loading = utils.createLoading(QUOTES);

export function getQuotes(getNext, tag, search, approved = true) {
  return (dispatch, getState, api) => {
    if (getNext) {
      const page = getState().quotes.pagination.currentPage + 1;
      api.Quotes.all({ page, tag, approved, search })
        .then(({ data }) => dispatch(createAction(GET_QUOTE_PAGE, data)))
        .catch(err => dispatch(createAction(GET_QUOTE_PAGE, err)));
    }
  };
}

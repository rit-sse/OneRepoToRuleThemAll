import { LOCATION_CHANGE } from 'connected-react-router';
import { getQuotes } from 'actions/quotes';
import qs from 'qs';

export default store => next => (action) => {
  if (action.type === LOCATION_CHANGE) {
    if (action.payload.location.pathname.indexOf('qdb') !== -1) {
      if (action.payload.location.pathname.indexOf('approval') !== -1) {
        store.dispatch(getQuotes(
          false,
          qs.parse(action.payload.location.search.slice(1)).tag || undefined,
          undefined,
          'null',
        ));
      } else {
        store.dispatch(getQuotes(
          false,
          qs.parse(action.payload.location.search.slice(1)).tag || undefined,
        ));
      }
    }
  }
  return next(action);
};

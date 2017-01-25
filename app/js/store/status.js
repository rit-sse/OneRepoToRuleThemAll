import { LOADING_STATUS, ERROR_STATUS } from '../actions/status';

export default store => next => action => { // eslint-disable-line
  if (action.meta && action.meta.loading) {
    return next({
      type: LOADING_STATUS,
      payload: {
        type: action.type,
      },
    });
  } else if (action.error) {
    return next({
      type: ERROR_STATUS,
      error: true,
      payload: {
        message: action.payload.message,
        type: action.type,
      },
    });
  }
  return next(action);
};

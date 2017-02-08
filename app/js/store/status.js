import { LOADING_STATUS, ERROR_STATUS } from '../actions/status';

export default store => next => action => { // eslint-disable-line
  if (action.meta && action.meta.loading) {
    return next({
      type: LOADING_STATUS,
      payload: {
        type: action.type,
        nameSpace: action.meta.nameSpace,
      },
    });
  } else if (action.error) {
    return next({
      type: ERROR_STATUS,
      error: true,
      payload: {
        nameSpace: action.meta.nameSpace,
        message: action.payload.message,
        type: action.type,
      },
    });
  }
  return next(action);
};

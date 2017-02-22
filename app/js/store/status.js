import { LOADING_STATUS, ERROR_STATUS } from '../actions/status';

export default () => next => (action) => {
  if (action.meta && action.meta.loading) {
    return next({
      type: LOADING_STATUS,
      payload: {
        type: action.type,
        namespace: action.meta.namespace,
      },
    });
  } else if (action.error) {
    return next({
      type: ERROR_STATUS,
      error: true,
      payload: {
        namespace: action.meta.namespace,
        message: action.payload.message,
        type: action.type,
      },
    });
  }
  return next(action);
};

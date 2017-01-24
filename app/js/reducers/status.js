import { LOADING_STATUS, ERROR_STATUS, CLOSE_STATUS } from '../actions/status';

const initState = {
  loading: [], // If empty no loading
  error: null, // Error message if there is an error else null
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOADING_STATUS:
      if (state.loading.includes(action.payload.type)) return state;
      return {
        ...state,
        loading: [
          ...state.loading,
          action.payload.type,
        ],
      };
    case ERROR_STATUS:
      return {
        ...state,
        error: action.payload.message,
      };
    case CLOSE_STATUS:
      return {
        ...initState,
      };
    default:
      if (state.loading.includes(action.type)) {
        return {
          ...state,
          loading: [
            ...state.loading.slice(0, state.loading.indexOf(action.type)),
            ...state.loading.slice(state.loading.indexOf(action.type) + 1),
          ],
        };
      }
      return state;
  }
};

import { LOADING_STATUS, ERROR_STATUS, CLOSE_STATUS } from '../actions/status';

const initState = {
  loading: {}, // If empty no loading
  error: null, // Error message if there is an error else null
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOADING_STATUS:
      if (state.loading[action.payload.type]) return state;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.type]: action.payload.nameSpace,
        },
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
      if (state.loading[action.type]) {
        return {
          ...state,
          loading: Object.keys(state.loading).filter(a => a !== action.type).reduce((prev, curr) => {
            return {
              ...prev,
              [curr]: state.loading[curr],
            };
          }, {}),
        };
      }
      return state;
  }
};

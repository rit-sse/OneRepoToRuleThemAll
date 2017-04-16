import {
  GET_OFFICERS,
  CREATE_OFFICER,
  UPDATE_OFFICER,
  DESTROY_OFFICER,
} from 'actions/officers';

export default function officers(state = {}, action) {
  switch (action.type) {
    case GET_OFFICERS:
      return action.payload.data.reduce((obj, officer) => ({
        ...obj,
        [officer.id]: officer,
      }), {});
    case CREATE_OFFICER:
    case UPDATE_OFFICER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DESTROY_OFFICER: {
      const { [action.payload.id]: omit, ...rest } = state; // eslint-disable-line no-unused-vars
      return rest;
    }
    default:
      return state;
  }
}

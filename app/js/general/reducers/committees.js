import { GET_COMMITTEES } from 'general/actions';

export default function committees(state = [], action) {
  switch (action.type) {
    case GET_COMMITTEES:
      return action.payload;
    default:
      return state;
  }
}

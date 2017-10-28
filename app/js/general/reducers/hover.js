import { HOVER, UNHOVER } from 'general/actions';

export default function hover(state = {}, action) {
  switch (action.type) {
    case HOVER:
      return action.payload;
    case UNHOVER:
      return {};
    default:
      return state;
  }
}

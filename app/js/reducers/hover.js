import { HOVER, UNHOVER } from 'actions/hover';

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

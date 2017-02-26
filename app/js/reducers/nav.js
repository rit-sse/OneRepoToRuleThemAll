import { OPEN_NAV, CLOSE_NAV } from 'actions/nav';

export default function nav(state = false, action) {
  switch (action.type) {
    case OPEN_NAV:
      return true;
    case CLOSE_NAV:
      return false;
    default:
      return state;
  }
}

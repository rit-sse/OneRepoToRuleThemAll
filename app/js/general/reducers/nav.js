import { OPEN_NAV, CLOSE_NAV } from 'actions/nav';
import { LOCATION_CHANGE } from 'connected-react-router';

export default function nav(state = false, action) {
  switch (action.type) {
    case OPEN_NAV:
      return true;
    case CLOSE_NAV:
    case LOCATION_CHANGE:
      return false;
    default:
      return state;
  }
}

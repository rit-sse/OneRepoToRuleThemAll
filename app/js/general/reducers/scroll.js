import { LOCATION_CHANGE } from 'connected-react-router';
import { SCROLL_DONE } from 'general/actions';

export default function (state = false, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return false;
    case SCROLL_DONE:
      return true;
    default:
      return state;
  }
}

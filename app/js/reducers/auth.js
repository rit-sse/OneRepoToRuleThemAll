import { SIGN_IN, SIGN_OUT } from '../actions/auth';

export default function auth(state = { signedIn: false }, action) {
  switch (action.type) {
    case SIGN_IN:
      return { signedIn: true, primary: action.officer.primaryOfficer };
    case SIGN_OUT:
      return { signedIn: false };
    default:
      return state;
  }
}

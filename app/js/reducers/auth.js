import { SIGN_IN, SIGN_OUT } from 'actions/auth';

const initState = {
  user: null,
};

export default function auth(state = initState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { user: action.payload.officer };
    case SIGN_OUT:
      return { user: null };
    default:
      return state;
  }
}

import { SIGN_IN, SIGN_OUT } from 'general/actions';

const initState = {
  user: null,
  officer: null,
};

export default function auth(state = initState, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return { ...initState };
    default:
      return state;
  }
}

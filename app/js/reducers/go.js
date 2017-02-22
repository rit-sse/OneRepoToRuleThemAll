import { GET_LINKS } from '../actions/go';

const initState = {
    links: []
};

export default function auth(state = initState, action) {
  switch (action.type) {
    case GET_LINKS:
        return {
            ...state,
            links: state.links.concat(action.payload),
        }
    default:
      return state;
  }
}

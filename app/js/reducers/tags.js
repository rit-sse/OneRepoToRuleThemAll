import { GET_TAGS } from 'actions/tags';

export default function tags(state = [], action) {
  switch (action.type) {
    case GET_TAGS:
      return action.payload;
    default:
      return state;
  }
}

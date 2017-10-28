import { GET_TAGS } from 'qdb/actions';

export default function tags(state = [], action) {
  switch (action.type) {
    case GET_TAGS:
      return action.payload;
    default:
      return state;
  }
}

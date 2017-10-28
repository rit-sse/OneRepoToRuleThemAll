import { GET_SPECIALTIES } from 'mentoring/actions';

export default function specialties(state = [], action) {
  switch (action.type) {
    case GET_SPECIALTIES:
      return action.payload.data;
    default:
      return state;
  }
}

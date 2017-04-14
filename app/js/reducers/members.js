import {
  GET_MEMBERS,
  // ADD_MEMBERSHIP,
  // APPROVE_MEMBERSHIP,
  // DENY_MEMBERSHIP,
} from 'actions/members';

export default function members(state = {}, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return action.payload;
    default:
      return state;
  }
}

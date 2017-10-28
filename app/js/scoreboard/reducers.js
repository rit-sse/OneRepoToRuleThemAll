import {
  GET_MEMBERS,
  GET_MEMBERSHIPS,
  APPROVE_MEMBERSHIP,
  DENY_MEMBERSHIP,
} from 'scoreboard/actions';

export function memberships(state = [], action) {
  switch (action.type) {
    case GET_MEMBERSHIPS:
      return action.payload;
    case APPROVE_MEMBERSHIP:
    case DENY_MEMBERSHIP:
      return state.filter(ship => ship.id !== action.payload);
    default:
      return state;
  }
}

export function members(state = {}, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return action.payload;
    default:
      return state;
  }
}

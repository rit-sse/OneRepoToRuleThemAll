import {
  FETCH_USER,
  FETCH_USERS,
} from 'members/actions';

// Example State:
// {
//   abc1234: {dce: 'abc1234', firstName...},
//   xyz9876: {dce: 'xyz9876', firstName...}
// }
export default function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      if (!action.payload.dce) {
        return state;
      }

      return {
        ...state,
        [action.payload.dce]: {
          ...state[action.payload.dce],
          ...action.payload,
        },
      };
    case FETCH_USERS: {
      if (!action.payload.length) {
        return state;
      }

      // Since we're getting all users, we'll just overwrite any users that were already in the store
      return action.payload.reduce((accum, user) => ({ ...accum, [user.dce]: user }), {});
    }
    default:
      return state;
  }
}

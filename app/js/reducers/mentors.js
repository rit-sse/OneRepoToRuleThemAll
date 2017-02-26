import {
  GET_MENTORS,
  CREATE_MENTOR,
  UPDATE_MENTOR,
  DESTROY_MENTOR,
  GET_MENTOR_ON_DUTY,
} from 'actions/mentors';

const initState = {
  all: [],
  mentorOnDuty: [],
};

function all(state, action) {
  switch (action.type) {
    case GET_MENTORS:
      return action.payload.data;
    case CREATE_MENTOR:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_MENTOR:
      return state.map((mentor) => {
        if (action.payload.id !== mentor.id) return mentor;
        return action.payload;
      });
    case DESTROY_MENTOR:
      return state.filter(mentor => mentor.id !== action.payload);
    default:
      return state;
  }
}

function mentorOnDuty(state, action) {
  switch (action.type) {
    case GET_MENTOR_ON_DUTY:
      return action.payload.data;
    default:
      return state;
  }
}

export default function mentors(state = initState, action) {
  return {
    all: all(state.all, action),
    mentorOnDuty: mentorOnDuty(state.mentorOnDuty, action),
  };
}

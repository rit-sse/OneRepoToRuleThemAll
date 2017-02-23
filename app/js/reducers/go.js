import { 
  GET_LINKS, 
  GET_LINKS_PAGES, 
  SET_PAGE_COUNT,
  SET_PAGE,
} from '../actions/go';

const initState = {
  page: 1,
  totalPages: 0,
  links: [],
};

export default function go(state = initState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_PAGE_COUNT:
      return {
        ...state,
        totalPages: action.payload,
      };
    case GET_LINKS_PAGES:
      return {
        ...state,
        page: state.page + 1,
        links: state.links.concat(action.payload),
      };
    case GET_LINKS:
      return {
        ...initState,
        links: action.payload
      }
    default:
      return state;
  }
}

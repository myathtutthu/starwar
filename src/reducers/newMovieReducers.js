import { FETCH_NEW_MOVIE,FETCH_DETAIL_MOVIE} from '../actions/types';
const initialState = {
    items: [],
    currentMovie: {},

  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_NEW_MOVIE:
        return {
          ...state,
          items: action.payload
        };
        case FETCH_DETAIL_MOVIE:
        return {
          ...state,
          currentMovie: action.payload
        };
      default:
        return state;
    }
  }
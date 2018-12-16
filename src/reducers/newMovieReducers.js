import { FETCH_NEW_MOVIE,FETCH_DETAIL_MOVIE,FETCH_CAST_LIST} from '../actions/types';
const initialState = {
    items: [],
    casts: [],
    currentMovie: {},
    fullyLoaded: false,

  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_NEW_MOVIE:
        return {
          ...state,
          items: action.payload,
          fullyLoaded : true
        };
        case FETCH_DETAIL_MOVIE:
        return {
          ...state,
          currentMovie: action.payload
        };
        case FETCH_CAST_LIST:
        return {
          ...state,
          casts: action.payload,
          fullyLoaded : true
        };
      default:
        return state;
    }
  }
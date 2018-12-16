import { FETCH_NEW_MOVIE,FETCH_DETAIL_MOVIE,FETCH_CAST_LIST} from '../actions/types';
const initialState = {
    items: [],
    casts: [],
    currentMovie: {},
    fullyLoaded: false,
    castPage: 1,

  };
  export default function(state = initialState, action) {
    console.log(state.castPage + 'state');
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
          casts:  state.casts.concat(action.payload),
          fullyLoaded : true,
          castPage:state.castPage+1
        };
      default:
        return state;
    }
  }
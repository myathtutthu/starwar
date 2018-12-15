import { combineReducers } from "redux";
import newMovieReducers from "./newMovieReducers";

export default combineReducers({
  newMovies: newMovieReducers
});

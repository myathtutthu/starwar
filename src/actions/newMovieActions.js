import { FETCH_NEW_MOVIE } from './types';

export const fetchMovies = (flag) => dispatch => {

fetch("https://swapi.co/api/films/")
    .then(res => res.json())
    .then(newMovies =>
      dispatch({
        type: FETCH_NEW_MOVIE,
        payload: newMovies.results,
        sortingType:flag
      })
    );
    
};
import { FETCH_DETAIL_MOVIE } from './types';

export const fetchDetailMovies = (id) => dispatch => {
console.log("https://swapi.co/api/films/"+id);
fetch("https://swapi.co/api/films/"+id)
    .then(res => res.json())
    .then(newMovies =>
      dispatch({
        type: FETCH_DETAIL_MOVIE,
        payload: newMovies
      })
    );
    
};
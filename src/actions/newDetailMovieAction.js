import { FETCH_DETAIL_MOVIE } from './types';

export const fetchDetailMovies = (id) => dispatch => {

fetch("https://swapi.co/api/films/"+id)
    .then(res => res.json())
    .then(newMovies =>
      dispatch({
        type: FETCH_DETAIL_MOVIE,
        payload: newMovies
      })
    );
    
};
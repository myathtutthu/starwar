import { FETCH_CAST_LIST } from './types';

export const fetchCasts = (page) => dispatch => {

fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(res => res.json())
    .then(casts =>
      dispatch({
        type: FETCH_CAST_LIST,
        payload: casts.results
      })
    );
    
};
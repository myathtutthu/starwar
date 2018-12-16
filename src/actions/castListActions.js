import { FETCH_CAST_LIST } from './types';

export const fetchCasts = () => dispatch => {

fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then(casts =>
      dispatch({
        type: FETCH_CAST_LIST,
        payload: casts.results
      })
    );
    
};
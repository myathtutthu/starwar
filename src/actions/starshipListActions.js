import { FETCH_STARSHIP_LIST } from './types';

export const fetchStarShipList= (page) => dispatch => {

fetch(`https://swapi.co/api/starships/?page=${page}`)
    .then(res => res.json())
    .then(casts =>
      dispatch({
        type: FETCH_STARSHIP_LIST,
        payload: casts.results
      })
    );
    
};
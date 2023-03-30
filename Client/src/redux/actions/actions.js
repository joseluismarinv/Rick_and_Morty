import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, GET_CHARACTER_DETAIL, CLEAN_DETAIL} from "./actions_type";

export const getCharacterDetail = (id) => {
  return function(dispatch) {
      const URL_BASE = "http://localhost:3001/rickandmorty";
  
      fetch(`${URL_BASE}/detail/${id}`)
      .then((response) => response.json())
      .then( (data) => dispatch({type: GET_CHARACTER_DETAIL, payload: data}));
    };
}

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  }
}

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id
  };
};
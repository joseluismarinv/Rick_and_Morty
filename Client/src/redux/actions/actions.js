import {
  CLEAN_FAVORITES,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  GET_FAVORITES,
} from "./actions_type";
import axios from "axios";

export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";

    const response = await axios.get(`${URL_BASE}/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    await axios.delete(`${URL_BASE}/rickandmorty/fav/${id}`);
    dispatch({ type: DELETE_FAVORITE, payload: id });
  };
};

export const cleanFavorites = () => {
  return {
    type: CLEAN_FAVORITES,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

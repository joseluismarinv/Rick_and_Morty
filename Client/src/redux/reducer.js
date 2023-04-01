import {
  CLEAN_FAVORITES,
  CLEAN_DETAIL,
  DELETE_FAVORITE,
  FILTER,
  GET_CHARACTER_DETAIL,
  GET_FAVORITES,
  ORDER,
} from "./actions/actions_type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, ...action.payload],
        allCharacters: [...state.myFavorites, ...action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case CLEAN_FAVORITES:
      return {
        ...state,
        myFavorites: [],
        allCharacters: [],
      };

    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "All Characters"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites: [
          ...state.allCharacters.sort((a, b) => {
            if (action.payload === "descendente") {
              return b.id - a.id;
            } else {
              return a.id - b.id;
            }
          }),
        ],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

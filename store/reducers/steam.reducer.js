import { mapGamesFromArray } from "../../helper/gameHelper";
import {
  FETCH_ALL_GAMES_ERROR,
  FETCH_ALL_GAMES_REQUEST,
  FETCH_ALL_GAMES_SUCCESS,
} from "../actions/steam.actions";

const INITIAL_STATE = {
  games: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_GAMES_REQUEST:
      return {
        ...state,
        games: {},
      };
    case FETCH_ALL_GAMES_SUCCESS:
      return {
        ...state,
        games: mapGamesFromArray(payload),
      };
    case FETCH_ALL_GAMES_ERROR:
      return {
        ...state,
        games: {},
      };
    default:
      return state;
  }
};

export default reducer;

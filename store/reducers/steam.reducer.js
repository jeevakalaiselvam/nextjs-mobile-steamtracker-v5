import { mapGamesFromArray } from "../../helper/gameHelper";
import {
  FETCH_ALL_GAMES_ERROR,
  FETCH_ALL_GAMES_REQUEST,
  FETCH_ALL_GAMES_SUCCESS,
  FETCH_GAME_ERROR,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
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
    case FETCH_GAME_REQUEST:
      return {
        ...state,
      };
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        games: {
          ...state.games,
          [payload.gameId]: {
            ...state.games[payload.gameId],
            data: payload.achievements,
          },
        },
      };
    case FETCH_GAME_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;

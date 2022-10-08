import { mapGamesFromArray } from "../../helper/gameHelper";
import {
  API_REFRESH_TOGGLE,
  FETCH_ALL_GAMES_ERROR,
  FETCH_ALL_GAMES_REQUEST,
  FETCH_ALL_GAMES_SUCCESS,
  FETCH_GAME_ERROR,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  REFRESH_ALL_GAMES_ERROR,
  REFRESH_ALL_GAMES_REQUEST,
  REFRESH_ALL_GAMES_SUCCESS,
  SET_REFRESHED_GAMES,
} from "../actions/steam.actions";

const INITIAL_STATE = {
  games: {},
  refreshedRecent: false,
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
        games: {
          ...state.games,
          [payload.gameId]: {
            ...state.games[payload.gameId],
            data: payload.achievements,
          },
        },
      };

    case SET_REFRESHED_GAMES:
      return {
        ...state,
        games: payload,
        refreshedRecent: true,
      };

    case API_REFRESH_TOGGLE:
      return {
        ...state,
        refreshedRecent: payload,
      };
    default:
      return state;
  }
};

export default reducer;

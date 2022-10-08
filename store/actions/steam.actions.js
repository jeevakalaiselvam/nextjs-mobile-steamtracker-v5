import axios from "axios";
import { API_GET_GAME, API_GET_GAMES } from "../../helper/urlHelper";

export const FETCH_ALL_GAMES_REQUEST = "FETCH_ALL_GAMES_REQUEST";
export const FETCH_ALL_GAMES_SUCCESS = "FETCH_ALL_GAMES_SUCCESS";
export const FETCH_ALL_GAMES_ERROR = "FETCH_ALL_GAMES_ERROR";

export const FETCH_GAME_REQUEST = "FETCH_GAME_REQUEST";
export const FETCH_GAME_SUCCESS = "FETCH_GAME_SUCCESS";
export const FETCH_GAME_ERROR = "FETCH_GAME_ERROR";

export const fetchAllGames = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ALL_GAMES_REQUEST });
    return axios.get(API_GET_GAMES()).then(
      (data) => {
        dispatch({ type: FETCH_ALL_GAMES_SUCCESS, payload: data.data.data });
      },
      (error) => {
        dispatch({ type: FETCH_ALL_GAMES_ERROR, payload: error });
      }
    );
  };
};

export const fetchGame = (gameId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_GAME_REQUEST });
    return axios.get(API_GET_GAME(gameId)).then(
      (data) => {
        dispatch({
          type: FETCH_GAME_SUCCESS,
          payload: { achievements: data.data.data, gameId: gameId },
        });
      },
      (error) => {
        dispatch({ type: FETCH_GAME_ERROR, payload: error });
      }
    );
  };
};

import {
  GAMES_SORT_COMPLETION,
  GAMES_VIEW_LARGE,
  GAME_SORT_ALL,
  GAME_VIEW_LARGE,
} from "../../helper/sortHelper";
import {
  GAMES_PAGE_DRAWER_TOGGLE,
  GAMES_PAGE_OPTIONS_TOGGLE,
  GAME_PAGE_DRAWER_TOGGLE,
  GAME_PAGE_OPTIONS_TOGGLE,
} from "../actions/settings.actions";

const INITIAL_STATE = {
  gamePageSettings: {
    drawerToggle: false,
    optionsToggle: false,
    viewType: GAMES_VIEW_LARGE,
    sortType: GAMES_SORT_COMPLETION,
  },
  gamesPageSettings: {
    drawerToggle: false,
    optionsToggle: false,
    historyToggle: false,
    viewType: GAME_VIEW_LARGE,
    sortType: GAME_SORT_ALL,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GAMES_PAGE_DRAWER_TOGGLE:
      return {
        ...state,
        gamesPageSettings: {
          ...state.gamesPageSettings,
          drawerToggle: payload,
        },
      };
    case GAMES_PAGE_OPTIONS_TOGGLE:
      return {
        ...state,
        gamesPageSettings: {
          ...state.gamesPageSettings,
          optionsToggle: payload,
        },
      };
    ///////////////////////////////////////////
    case GAME_PAGE_DRAWER_TOGGLE:
      return {
        ...state,
        gamePageSettings: {
          ...state.gamePageSettings,
          drawerToggle: payload,
        },
      };
    case GAME_PAGE_OPTIONS_TOGGLE:
      return {
        ...state,
        gamePageSettings: {
          ...state.gamePageSettings,
          optionsToggle: payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;

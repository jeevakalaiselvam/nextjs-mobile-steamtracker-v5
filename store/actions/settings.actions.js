export const GAMES_PAGE_DRAWER_TOGGLE = "GAMES_PAGE_DRAWER_TOGGLE";
export const GAMES_PAGE_OPTIONS_TOGGLE = "GAMES_PAGE_OPTIONS_TOGGLE";

export const GAME_PAGE_DRAWER_TOGGLE = "GAME_PAGE_DRAWER_TOGGLE";
export const GAME_PAGE_OPTIONS_TOGGLE = "GAME_PAGE_OPTIONS_TOGGLE";

//////////////////////////////////////////////////////////////////

export const gamesPageDrawerToggle = (drawerToggle) => {
  return { type: GAMES_PAGE_DRAWER_TOGGLE, payload: drawerToggle };
};

export const gamesPageOptionsToggle = (optionsToggle) => {
  return { type: GAMES_PAGE_OPTIONS_TOGGLE, payload: optionsToggle };
};

//////////////////////////////////////////////////////////////////

export const gamePageDrawerToggle = (drawerToggle) => {
  return { type: GAME_PAGE_DRAWER_TOGGLE, payload: drawerToggle };
};

export const gamePageOptionsToggle = (optionsToggle) => {
  return { type: GAME_PAGE_OPTIONS_TOGGLE, payload: optionsToggle };
};

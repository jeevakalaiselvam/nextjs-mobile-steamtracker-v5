export const mapGamesFromArray = (games) => {
  let gamesMap = {};
  if (games.length > 0) {
    games.forEach((game) => {
      let newGame = {
        gameId: game.id,
        totalPlaytime: game.playtime,
      };
      gamesMap = {
        ...gamesMap,
        [game.id]: newGame,
      };
    });
  }
  return gamesMap;
};

export const getArrayFromObject = (map) => {
  let newArray = [];
  if (Object.keys(map).length > 0) {
    Object.keys(map).forEach((singleMapKey) => {
      newArray.push(map[singleMapKey]);
    });
  }
  return newArray;
};

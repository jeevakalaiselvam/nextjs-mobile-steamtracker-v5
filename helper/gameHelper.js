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

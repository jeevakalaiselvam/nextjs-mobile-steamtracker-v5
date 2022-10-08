import { FETCH_ALL_GAMES } from "../../../helper/urlHelper";

const axios = require("axios");

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      let finalGamesResponse = {};

      //Get All Games for the current User
      const gamesResponse = await fetch(FETCH_ALL_GAMES);
      const gamesData = await gamesResponse.json();
      finalGamesResponse = gamesData.response.games.map((game) => {
        const newGame = {
          id: game.appid,
          playtime: game.playtime_forever,
        };
        return newGame;
      });

      //Get all Games and Refresh data in File
      res.status(200).json({ status: "success", data: finalGamesResponse });
    } catch (error) {
      console.error(error);
      //Get all Games and Refresh data in File
      res.status(500).json({ status: "error", error: error });
    }
  }
};

export default handler;

import { useRouter } from "next/router";
import React from "react";
import { TbLoader } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getArrayFromObject } from "../../../helper/gameHelper";
import GameCard from "../../atoms/GameCard";
import * as Loaders from "react-spinners";
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: auto;
`;

const NoGames = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
`;

const Refreshing = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
`;

export default function GamesContent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games, refreshedRecent } = steam;
  const gamesList = getArrayFromObject(games);

  let searchFilteredGames = [];
  let sortFilteredGames = [];

  if (gamesList.length > 0) {
    searchFilteredGames = gamesList.filter((game) => game);
    sortFilteredGames = searchFilteredGames.filter((game) => game);
  }

  return (
    <Container>
      {!refreshedRecent && (
        <Refreshing>
          <Loaders.BeatLoader />
        </Refreshing>
      )}
      {refreshedRecent &&
        sortFilteredGames.length > 0 &&
        sortFilteredGames.map((game) => {
          return <GameCard game={game} key={game.gameId} />;
        })}
      {refreshedRecent && sortFilteredGames.length === 0 && (
        <NoGames>NO GAMES</NoGames>
      )}
    </Container>
  );
}

import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getArrayFromObject } from "../../../helper/gameHelper";
import GameCard from "../../atoms/GameCard";
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  min-height: auto;
  background-color: rgba(0, 0, 0, 0.3);
`;

const NoGames = styled.div`
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
  const { games } = steam;
  const gamesList = getArrayFromObject(games);

  let searchFilteredGames = [];
  let sortFilteredGames = [];

  if (gamesList.length > 0) {
    searchFilteredGames = gamesList.filter((game) => game);
    sortFilteredGames = searchFilteredGames.filter((game) => game);
  }

  return (
    <Container>
      {sortFilteredGames.length > 0 &&
        sortFilteredGames.map((game) => {
          return <GameCard game={game} />;
        })}
      {sortFilteredGames.length === 0 && <NoGames>NO GAMES</NoGames>}
    </Container>
  );
}

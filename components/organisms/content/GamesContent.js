import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default function GamesContent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;

  let searchFilteredGames = [];
  let sortFilteredGames = [];

  if (games.length > 0) {
    searchFilteredGames = games.filter((game) => game);
    sortFilteredGames = searchFilteredGames.filter((game) => game);
  }

  return (
    <Container>
      {sortFilteredGames.length > 0 &&
        sortFilteredGames.map((game) => {
          return <h5>GAME</h5>;
        })}
      {sortFilteredGames.length === 0 && <h5>NO GAMES</h5>}
    </Container>
  );
}

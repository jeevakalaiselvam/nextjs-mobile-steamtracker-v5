import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HEADER_IMAGE } from "../../helper/urlHelper";
import { fetchGame } from "../../store/actions/steam.actions";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  min-height: 200px;
  margin-bottom: 0.5rem;
`;

const Image = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url(${(props) => props.image});
  width: 100%;
  min-height: 200px;
  min-height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function GameCard({ game }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;

  const { gameId } = game;

  useEffect(() => {
    if (gameId) {
      if (!games[gameId]?.achievements) {
        dispatch(fetchGame(gameId));
      }
    }
  }, [gameId]);

  return (
    <Container>
      <Image image={HEADER_IMAGE(gameId)}>{gameId}</Image>
    </Container>
  );
}
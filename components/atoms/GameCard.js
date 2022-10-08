import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HEADER_IMAGE } from "../../helper/urlHelper";
import { fetchGame } from "../../store/actions/steam.actions";

const Container = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Image = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url(${(props) => props.image});
  width: 100%;
  min-height: 170px;
  min-height: 170px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export default function GameCard({ game }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;

  const {
    id,
    name,
    version,
    achievements,
    completion,
    toGet,
    completed,
    total,
    gameId,
  } = game;

  return (
    <Container show={achievements.length !== 0}>
      <Image image={HEADER_IMAGE(gameId)} />
      <Title>{name ?? ""}</Title>
    </Container>
  );
}

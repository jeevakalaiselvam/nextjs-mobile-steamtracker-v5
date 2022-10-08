import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: aquamarine;
`;

const Example = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function GamesPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;

  return (
    <Container>
      <Example>EXAMPLE</Example>
    </Container>
  );
}

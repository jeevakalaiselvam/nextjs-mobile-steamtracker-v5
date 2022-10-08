import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { READ_JSON, SELECTED_THEME_ID } from "../../../helper/storageHelper";
import { HEADER_IMAGE } from "../../../helper/urlHelper";
import GamesHeader from "../header/GamesHeader";

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const BackDropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  backdrop-filter: blur(30px);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 6vh;
  max-height: 6vh;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  overflow: scroll;
  padding: 0.5rem;
`;

export default function GamesPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;

  const getStoredThemeId = () => {
    const storedId = READ_JSON(SELECTED_THEME_ID, "1151640");
    return storedId;
  };

  useEffect(() => {
    if (games && Object.keys(games).length === 0) {
      router.push("/");
    }
  }, []);

  return (
    <MainContainer image={HEADER_IMAGE(getStoredThemeId())}>
      <BackDropContainer>
        <HeaderContainer>
          <GamesHeader />
        </HeaderContainer>
        <ContentContainer>CONTAINER</ContentContainer>
      </BackDropContainer>
    </MainContainer>
  );
}

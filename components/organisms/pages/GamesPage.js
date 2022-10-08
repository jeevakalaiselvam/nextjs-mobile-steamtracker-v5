import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLOR_TEXT_WHITE, getColor } from "../../../helper/colorHelper";
import { READ_JSON, SELECTED_THEME_ID } from "../../../helper/storageHelper";
import { HEADER_IMAGE } from "../../../helper/urlHelper";
import GamesContent from "../content/GamesContent";
import GamesHeader from "../header/GamesHeader";
import GamesLeftSidebar from "../left/GamesLeftSidebar";

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  color: ${(props) => getColor(COLOR_TEXT_WHITE)};
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
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 8vh;
  max-height: 7vh;
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

const DrawerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => (props.drawerToggle ? "0" : "-70vw")};
  top: 0;
  min-width: 70vw;
  max-width: 70vw;
  min-height: 100vh;
  max-height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  transition: all 0.5s;
  z-index: 1;
`;

export default function GamesPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;
  const { gamesPageSettings } = settings;
  const { drawerToggle, optionsToggle } = gamesPageSettings;
  const [themeGameId, setThemGameId] = useState("1151640");

  useEffect(() => {
    const storedId = READ_JSON(SELECTED_THEME_ID);
    setThemGameId(storedId);
  }, []);

  useEffect(() => {
    if (Object.keys(games).length === 0) {
      router.push("/");
    }
  }, []);

  return (
    <MainContainer image={HEADER_IMAGE(themeGameId)}>
      <BackDropContainer>
        <DrawerContainer drawerToggle={drawerToggle}>
          <GamesLeftSidebar />
        </DrawerContainer>
        <HeaderContainer>
          <GamesHeader />
        </HeaderContainer>
        <ContentContainer>
          <GamesContent />
        </ContentContainer>
      </BackDropContainer>
    </MainContainer>
  );
}

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  COLOR_ACCENT,
  COLOR_TEXT_WHITE,
  getColor,
} from "../../../helper/colorHelper";
import { getArrayFromObject } from "../../../helper/gameHelper";
import {
  getIcon,
  ICON_DRAWER_CLOSE,
  ICON_THEME_SWITCH,
} from "../../../helper/iconHelper";
import { SELECTED_THEME_ID, WRITE_JSON } from "../../../helper/storageHelper";
import {
  gamePageDrawerToggle,
  gamesPageDrawerToggle,
} from "../../../store/actions/settings.actions";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
`;

const DraweOverlay = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const CloseTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  color: ${(props) => getColor(COLOR_TEXT_WHITE)};
  padding: 1rem;
  font-size: 2.5rem;

  &:hover,
  &:active {
    color: ${(props) => getColor(COLOR_ACCENT)};
  }
`;

const ThemeSwitch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  color: ${(props) => getColor(COLOR_TEXT_WHITE)};
  padding: 1rem;
  font-size: 2.5rem;
  &:hover,
  &:active {
    color: ${(props) => getColor(COLOR_ACCENT)};
  }
`;

export default function GamesLeftSidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;
  const { gamesPageSettings } = settings;
  const { drawerToggle } = gamesPageSettings;

  const gamesList = getArrayFromObject(games);

  const themeSwitchHandler = () => {
    let newGameId =
      gamesList[Math.floor(Math.random() * gamesList.length)].id ?? "1151640";
    WRITE_JSON(SELECTED_THEME_ID, newGameId);
    dispatch(gamesPageDrawerToggle(false));
  };

  const closeDrawerHandler = () => {
    dispatch(gamesPageDrawerToggle(!drawerToggle));
  };

  return (
    <Container>
      <DraweOverlay>
        <ThemeSwitch onClick={themeSwitchHandler}>
          {getIcon(ICON_THEME_SWITCH)}
        </ThemeSwitch>
        <CloseTop onClick={closeDrawerHandler}>
          {getIcon(ICON_DRAWER_CLOSE)}
        </CloseTop>
      </DraweOverlay>
    </Container>
  );
}

import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  COLOR_ACCENT,
  COLOR_TEXT_WHITE,
  getColor,
} from "../../../helper/colorHelper";
import {
  getIcon,
  ICON_MENU,
  ICON_OPTIONS_DROPDOWN,
} from "../../../helper/iconHelper";
import {
  gamePageDrawerToggle,
  gamesPageDrawerToggle,
  GAME_PAGE_DRAWER_TOGGLE,
} from "../../../store/actions/settings.actions";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  color: ${(props) => getColor(COLOR_TEXT_WHITE)};
  font-size: 2rem;

  &:hover {
    color: ${(props) => getColor(COLOR_ACCENT)};
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 50px;
  min-height: 50px;
  color: ${(props) => getColor(COLOR_TEXT_WHITE)};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  color: ${(props) => getColor(COLOR_TEXT_WHITE)};
  font-size: 2rem;
`;

export default function GamesHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.settings);
  const { games } = steam;
  const { gamesPageSettings } = settings;
  const { drawerToggle, optionsToggle } = gamesPageSettings;

  const drawerToggleHandler = () => {
    console.log("SEnding");
    dispatch(gamesPageDrawerToggle(!drawerToggle));
  };

  return (
    <Container>
      <Left onClick={drawerToggleHandler}>
        {drawerToggle && getIcon(ICON_MENU)}
        {!drawerToggle && getIcon(ICON_MENU)}
      </Left>
      <Middle>All Games</Middle>
      <Right>
        {optionsToggle && getIcon(ICON_OPTIONS_DROPDOWN)}
        {!optionsToggle && getIcon(ICON_OPTIONS_DROPDOWN)}
      </Right>
    </Container>
  );
}

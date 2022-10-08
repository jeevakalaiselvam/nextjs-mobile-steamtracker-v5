import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  refreshingGamesToggle,
  setRefreshedGames,
} from "../store/actions/steam.actions";
import * as Loaders from "react-spinners";
import { useRouter } from "next/router";
import styled from "styled-components";
import { API_GET_GAME, API_GET_GAMES, HEADER_IMAGE } from "../helper/urlHelper";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;
const BackdropContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steam = useSelector((state) => state.steam);
  const settings = useSelector((state) => state.steam);
  const { games, refreshedRecent } = steam;

  const getRandomGameId = () => {
    return "1151640";
  };

  useEffect(() => {
    console.log("Getting All Games", games);
    new Promise((resolve, reject) => {
      //Getting All Games
      axios
        .get(API_GET_GAMES())
        .then((response) => {
          let data = response.data.data;
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          resolve([]);
        });
    })
      .then((games) => {
        console.log("ALL GAMES", games);
        //Get All Achievement for Games
        const allPromises = games.map((game) => {
          return new Promise((resolve, reject) => {
            axios
              .get(API_GET_GAME(game.id))
              .then((response) => {
                let gameData = response.data.data;
                resolve(gameData);
              })
              .catch((error) => {
                resolve({ achievements: [] });
              });
          });
        });
        Promise.all(allPromises).then((allGames) => {
          dispatch(setRefreshedGames(allGames));
          router.push("/games");
        });
      })
      .catch((games) => {});
  }, []);

  return (
    <Container image={HEADER_IMAGE(getRandomGameId())}>
      <BackdropContainer>
        <Loaders.HashLoader />
      </BackdropContainer>
    </Container>
  );
}

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import { useEffect, useState } from "react";
import {
  getCharacters,
  getPlanets,
  getStarships,
} from "../api/fetchContent.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [isloading, setIsLoading] = useState(true)

  function callGetCharacters() {
    getCharacters().then((data) => {
      dispatch({
        type: "setCharacters",
        payload: { charactersObj: data },
      });
    });
  }

  function callGetPlanets() {
    getPlanets().then((data) => {
      dispatch({
        type: "setPlanets",
        payload: { planetsObj: data },
      });
    });
  }

  function callGetStarships() {
    getStarships().then((data) => {
      dispatch({
        type: "setStarships",
        payload: { starshipsObj: data },
      });
    });
  }

  useEffect(() => {
    callGetCharacters()
    callGetPlanets();
    callGetStarships();
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);

  return (
    <>
      {isloading ? (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center">
          <img className="imgLoading" src="/img/output-onlinegiftools.gif" alt="loading" />
        </div>
      ):(
      <>
        <section className="m-5">
          <h2 className="section-title text-center">Characters</h2>
          <article className="article-config">
            {store.characters.map((character,index) => {
              //console.log(character);
              return (
                <Card
                  name={character.name}
                  imgCard={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${Number(
                    character.uid
                  )}.jpg`}
                  key={index}
                />
              );
            })}
          </article>
        </section>
        <section className="m-5">
          <h2 className="section-title text-center">Planets</h2>
          <article className="article-config">
            {store.planets.map((planet,index) => {
              return (
                <Card
                  name={planet.name}
                  imgCard={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${Number(
                    planet.uid
                  )}.jpg`}
                  key={index}
                />
              );
            })}
          </article>
        </section>
        <section className="m-5">
          <h2 className="section-title text-center">StarShips</h2>
          <article className="article-config">
            {store.starships.map((starship,index) => {
              return (
                <Card
                  name={starship.name}
                  imgCard={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${Number(
                    starship.uid
                  )}.jpg`}
                  key={index}
                />
              );
            })}
          </article>
        </section>
      </>)}
    </>
  );
};

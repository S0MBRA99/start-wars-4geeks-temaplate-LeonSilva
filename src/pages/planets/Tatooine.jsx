import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Tatooine = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Tatooine is one of the most iconic planets in the *Star Wars* galaxy, known for its twin suns and harsh desert environment. Located in the Outer Rim Territories, it is a lawless world largely controlled by gangsters, traders, and the Hutt crime families, with little influence from the Galactic Republic or later the Empire. Despite its remote and desolate nature, Tatooine plays a central role in galactic history as the homeworld of both Anakin Skywalker and Luke Skywalker. The planet is dotted with moisture farms, small settlements like Mos Eisley and Mos Espa, and dangerous expanses of sand inhabited by Tusken Raiders and massive creatures such as the krayt dragon. Tatooine is a place of hardship and survival, but it also serves as the starting point for great destinies. Its endless dunes and twin sunsets have become symbolic of adventure, longing, and the journey from obscurity to greatness.
`;//--Change this one

  function callGetPlanet(uid) {
    getPlanet(uid).then((data) => {
      //console.log(data.result)
      setPlanetElement(data.result);
      console.log("lo que llega a planetElement",planetElement);
    });
  }

  function callGetPlanets() {
    getPlanets().then((data) => {
      //console.log(data[0])
      callGetPlanet(data[0].uid); //--Change this one
    });
  }

  useEffect(() => {
    callGetPlanets();
  }, []);
  return (
    <>
      {planetElement ? (
        <PagePlanetsFetchLayout
          description={description}
          climated={planetElement.properties.climated}
          created={planetElement.properties.created}
          diameter={planetElement.properties.diameter}
          gravity={planetElement.properties.gravity}
          name={planetElement.properties.name}
          orbital_period={planetElement.properties.orbital_period}
          population={planetElement.properties.population}
          rotation_period={planetElement.properties.rotation_period}
          surface_water={planetElement.properties.surface_water}
          terrain={planetElement.properties.terrain}
          imgPlanet={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${Number(
            planetElement.uid
          )}.jpg`}
        />
      ) : null}
    </>
  );
};

export default Tatooine;//--Change this one

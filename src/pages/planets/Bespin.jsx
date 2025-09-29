import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Bespin = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Bespin is a massive gas giant in the *Star Wars* galaxy, most famous for its floating metropolis, Cloud City. Situated in the Outer Rim Territories, Bespin is rich in valuable tibanna gas, a resource refined in Cloud City and used to enhance blaster weapons and hyperdrives. Cloud City itself, run by Lando Calrissian, functioned both as a mining colony and a luxurious resort, attracting traders and travelers seeking opportunity. Though remote, it became the stage for pivotal events in the Galactic Civil War. It was here that Han Solo was betrayed and frozen in carbonite, and where Luke Skywalker confronted Darth Vader in a fateful duel, learning the shocking truth of his parentage. The city’s gleaming architecture, set against stunning sunsets above endless clouds, stands in stark contrast to the betrayal and tragedy that unfolded there. Bespin embodies both opportunity and danger, beauty and heartbreak, within the saga’s unfolding destiny.
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
      callGetPlanet(data[5].uid); //--Change this one
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

export default Bespin;//--Change this one

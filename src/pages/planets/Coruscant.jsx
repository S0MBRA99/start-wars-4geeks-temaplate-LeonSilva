import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Coruscant = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Coruscant is the bustling heart of the galaxy in the *Star Wars* saga, serving as the political, cultural, and economic capital for millennia. Located in the Core Worlds, the entire planet is covered by a vast cityscape of endless skyscrapers, starports, and industrial sectors, earning it the title of an ecumenopolis. Coruscant was the seat of the Galactic Republic and home to the Jedi Temple, where generations of Jedi were trained. It later became the center of power for the Galactic Empire under Emperor Palpatine, symbolizing both order and oppression. Beneath its gleaming upper levels, the planet hides dark and dangerous underworlds, where crime, poverty, and corruption thrive far from the eyes of the elite. Coruscant has witnessed pivotal events in galactic history, from the rise of democracy to its collapse, the fall of the Jedi, and the birth of the Empire. It embodies both the promise of unity and the perils of unchecked power.
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
      callGetPlanet(data[8].uid); //--Change this one
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

export default Coruscant;//--Change this one

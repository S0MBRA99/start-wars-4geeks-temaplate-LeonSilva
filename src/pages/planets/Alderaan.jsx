import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Alderaan = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Alderaan is a peaceful and prosperous planet in the *Star Wars* galaxy, renowned for its beauty, culture, and commitment to diplomacy. Located in the Core Worlds, it was governed by the noble House of Organa, with Bail Organa and later his adopted daughter, Princess Leia Organa, serving as leaders. Alderaan stood as a beacon of democracy, education, and pacifism, often advocating for nonviolent solutions and opposing the authoritarian rise of the Galactic Empire. Its people valued art, science, and humanitarian efforts, making the planet a cultural jewel of the galaxy. However, Alderaan’s defiance of Imperial tyranny made it a target, and in a devastating act of terror, it was destroyed by the Death Star as a demonstration of the Empire’s power. The annihilation of Alderaan remains one of the darkest tragedies in galactic history, fueling the Rebellion’s determination to overthrow the Empire and restore freedom to the galaxy.
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
      callGetPlanet(data[1].uid); //--Change this one
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

export default Alderaan;//--Change this one

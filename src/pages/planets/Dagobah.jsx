import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Dagobah = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Dagobah is a mysterious swamp-covered planet shrouded in mist, isolation, and the living presence of the Force. Located in the Outer Rim Territories, it is teeming with strange wildlife, dense forests, and murky bogs, creating an environment that feels both hostile and mystical. After the fall of the Jedi Order, Yoda chose Dagobah as his place of exile, using the planet’s strong natural Force energy to conceal his presence from the Empire and the Sith. It was here that Luke Skywalker trained under Yoda’s guidance, learning the deeper philosophies of the Jedi and confronting visions that tested his fears and doubts. Though seemingly desolate, Dagobah became the crucible of Luke’s spiritual journey, where wisdom, patience, and inner strength mattered more than combat skills. The planet’s eerie yet powerful atmosphere represents reflection, growth, and the struggle to face one’s inner darkness while embracing the true path of the Force.
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
      callGetPlanet(data[4].uid); //--Change this one
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

export default Dagobah;//--Change this one

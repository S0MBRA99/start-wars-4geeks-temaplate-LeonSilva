import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Kamino = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Kamino is a remote and stormy ocean planet located beyond the Outer Rim, known for its endless seas and constant torrential rains. Its surface is almost entirely covered by water, with only a few towering cities built on stilts above the waves, such as Tipoca City. Kamino gained galactic significance during the Clone Wars as the birthplace of the Grand Army of the Republic. The planet’s secretive inhabitants, the Kaminoans, were renowned for their expertise in cloning and genetic engineering, creating the clone troopers from the template of the bounty hunter Jango Fett. Though advanced and efficient, the Kaminoans were also enigmatic and emotionally detached, viewing cloning as both science and business. The secrecy of Kamino’s role in the war reflected the manipulation of galactic events by Darth Sidious. Shrouded in storms and mystery, Kamino stands as a symbol of artificial creation, hidden power, and the fragile line between science and morality.
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
      callGetPlanet(data[9].uid); //--Change this one
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

export default Kamino;//--Change this one

import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Hoth = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Hoth is a remote, icy planet in the Outer Rim Territories, remembered as the site of one of the most dramatic battles in the *Star Wars* saga. Covered in endless snowfields, frozen tundra, and towering ice caverns, Hoth is hostile to life, inhabited mainly by creatures like the predatory wampa and the hardy tauntaun. Despite its extreme conditions, the Rebel Alliance established Echo Base there as a hidden stronghold after their victory at Yavin. The planet’s freezing climate and isolated location made it difficult for the Empire to detect—at least temporarily. However, the Empire eventually discovered the base, leading to the Battle of Hoth, where the Rebels bravely resisted but were ultimately forced to retreat. Iconic imagery from this battle includes the towering AT-AT walkers advancing across the snowy plains. Hoth symbolizes both the harsh sacrifices of war and the resilience of the Rebellion in the face of overwhelming odds.
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
      callGetPlanet(data[3].uid); //--Change this one
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

export default Hoth;//--Change this one

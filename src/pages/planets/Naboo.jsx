import React, { useEffect, useState } from "react";
import PagePlanetsFetchLayout from "../../components/PagePlanetsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import {getPlanets,getPlanet } from "../../../src/api/fetchContent";


const Naboo = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [planetElement, setPlanetElement] = useState();
  const description = `Naboo is a picturesque and culturally rich planet in the *Star Wars* galaxy, renowned for its natural beauty and sophisticated society. Located in the Mid Rim, it is home to both the human Naboo people and the aquatic Gungans, two species with distinct traditions who eventually learned to coexist. The planet is characterized by rolling plains, lush forests, and vast underwater cities, as well as the elegant capital of Theed with its iconic waterfalls and grand architecture. Naboo holds great historical importance, as it was the birthplace of both Padmé Amidala, a queen and senator who championed peace and democracy, and Sheev Palpatine, who rose from senator to Emperor. The planet was the site of the Battle of Naboo, where the Gungans and Naboo joined forces to repel the Trade Federation’s invasion. Naboo symbolizes harmony, resilience, and the delicate balance between nature, politics, and destiny in the galaxy’s history.
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
      callGetPlanet(data[7].uid); //--Change this one
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

export default Naboo;//--Change this one

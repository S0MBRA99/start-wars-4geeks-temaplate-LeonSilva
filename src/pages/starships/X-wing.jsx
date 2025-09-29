import React, { useEffect, useState } from "react";
import PageStarshipsFetchLayout from "../../components/PageStarshipsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer";
import { getStarships, getStarship } from "../../../src/api/fetchContent";

const Xwing = () => {
  //--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [starshipElement, setStarshipElement] = useState();
  const description = `The X-wing starfighter is the Rebel Alliance’s most iconic and versatile starship, renowned for its balance of speed, maneuverability, and firepower. Manufactured by Incom Corporation, the T-65 X-wing was designed as a multi-role fighter capable of excelling in both dogfights and heavy assaults. Its distinctive S-foils, which open into an “X” shape during combat, improve stability and firing arcs, giving the ship its name. Equipped with four laser cannons, proton torpedoes, strong shields, and a hyperdrive, the X-wing was far superior to the Empire’s standard TIE fighters, allowing Rebel pilots to engage in prolonged battles and deep-space missions. One of the most famous X-wings was flown by Luke Skywalker, who used it to destroy the first Death Star during the Battle of Yavin. Reliable and adaptable, the X-wing became the backbone of the Rebel fleet and later the Resistance, symbolizing hope, resilience, and the fight for freedom across the galaxy.
`; //--Change this one

  function callGetStarship(uid) {
    getStarship(uid).then((data) => {
      //console.log(data.result)
      setStarshipElement(data.result);
      //console.log("lo que llega a starShipElement",starshipElement);
    });
  }

  function callGetStarships() {
    getStarships().then((data) => {
      //console.log(data[0])
      callGetStarship(data[8].uid); //--Change this one
    });
  }

  useEffect(() => {
    callGetStarships();
  }, []);
  return (
    <>
      {starshipElement ? (
        <PageStarshipsFetchLayout
          description={description}
          MGLT={starshipElement.properties.MGLT}
          cargo_capacity={starshipElement.properties.cargo_capacity}
          consumables={starshipElement.properties.consumables}
          cost_in_credits={starshipElement.properties.cost_in_credits}
          created={starshipElement.properties.created}
          crew={starshipElement.properties.crew}
          hyperdrive_rating={starshipElement.properties.hyperdrive_rating}
          length={starshipElement.properties.length}
          manufacturer={starshipElement.properties.manufacturer}
          max_atmosfering_speed={starshipElement.properties.max_atmosfering_speed}
          model={starshipElement.properties.model}
          name={starshipElement.properties.name}
          passengers={starshipElement.properties.max_atmosfering_speed}
          starship_class={starshipElement.properties.max_atmosfering_speed}
          imgStarship={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${Number(
            starshipElement.uid
          )}.jpg`}
        />
      ) : null}
    </>
  );
};

export default Xwing; //--Change this one

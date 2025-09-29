import React, { useEffect, useState } from "react";
import PageStarshipsFetchLayout from "../../components/PageStarshipsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer";
import { getStarships, getStarship } from "../../../src/api/fetchContent";

const TIEAdvancedx1 = () => {
  //--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [starshipElement, setStarshipElement] = useState();
  const description = `The TIE Advanced x1 is a prototype starfighter developed by Sienar Fleet Systems for the Galactic Empire, most famously flown by Darth Vader during the Battle of Yavin. Unlike the standard TIE fighter, the TIE Advanced x1 featured advanced shielding, a hyperdrive system, and improved maneuverability, making it far more versatile and durable in combat. Its distinctive design included elongated, bent wings and a sleeker cockpit, giving it a more menacing and experimental appearance. Outfitted with powerful laser cannons and warhead launchers, the fighter combined heavy firepower with Vader’s unmatched piloting skills to make it a deadly threat. Although only a limited number were produced due to the high cost of manufacturing, the TIE Advanced x1 paved the way for future starfighter innovations, including the TIE Interceptor. As Darth Vader’s personal craft, it has become an enduring symbol of the Empire’s ambition to create superior war machines and maintain dominance in space battles.
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
      callGetStarship(data[6].uid); //--Change this one
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

export default TIEAdvancedx1; //--Change this one

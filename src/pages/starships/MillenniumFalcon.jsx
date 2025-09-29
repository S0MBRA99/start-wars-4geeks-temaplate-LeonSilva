import React, { useEffect, useState } from "react";
import PageStarshipsFetchLayout from "../../components/PageStarshipsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer";
import { getStarships, getStarship } from "../../../src/api/fetchContent";

const MillenniumFalcon = () => {
  //--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [starshipElement, setStarshipElement] = useState();
  const description = `The Millennium Falcon is one of the most legendary ships in the *Star Wars* galaxy, celebrated for its speed, resilience, and history of daring missions. Originally a Corellian YT-1300 freighter, it was heavily modified by its owners, most famously Han Solo and Chewbacca, to become a smuggling vessel capable of outrunning Imperial ships and surviving intense battles. Armed with quad laser cannons, concussion missiles, and advanced shields, the Falcon combines firepower with surprising agility. Its hyperdrive system, though temperamental, made it one of the fastest ships in the galaxy—earning its reputation for completing the Kessel Run in less than twelve parsecs. Beyond its technical prowess, the Millennium Falcon became a symbol of hope and rebellion, playing pivotal roles in battles such as the destruction of both Death Stars. Worn, patched, and far from elegant, the ship embodies resourcefulness and defiance, proving that even an underdog vessel can change the fate of the galaxy.
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
      callGetStarship(data[5].uid); //--Change this one
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

export default MillenniumFalcon; //--Change this one

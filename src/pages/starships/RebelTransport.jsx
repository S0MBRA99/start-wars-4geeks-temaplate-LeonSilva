import React, { useEffect, useState } from "react";
import PageStarshipsFetchLayout from "../../components/PageStarshipsFetchLayout";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { getStarships, getStarship } from "../../api/fetchContent";

const RebelTransport = () => {
  //--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [starshipElement, setStarshipElement] = useState();
  const description = `The Rebel transport, formally known as the GR-75 medium transport, is a large cargo vessel used extensively by the Rebel Alliance during the Galactic Civil War. Built by Gallofree Yards, the GR-75 was originally designed as a freighter, valued for its spacious cargo holds and modular design. The Rebellion adapted these transports for military use, converting them into troop carriers, medical ships, and supply haulers essential for sustaining their hidden bases and fleets. Though unarmed and lightly shielded, Rebel transports often operated in convoys protected by starfighters and capital ships. They played a vital role in evacuations, most notably during the Battle of Hoth, where fleets of GR-75s carried soldiers and supplies to safety while under heavy Imperial assault. Lacking the sleekness of fighters or the power of capital ships, these transports nonetheless embodied the survival and determination of the Rebellion. They were the lifeline of the cause, ensuring hope endured across the galaxy.
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
      callGetStarship(data[9].uid); //--Change this one
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

export default RebelTransport; //--Change this one

import React, { useEffect, useState } from "react";
import PageStarshipsFetchLayout from "../../components/PageStarshipsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer";
import { getStarships, getStarship } from "../../../src/api/fetchContent";

const SentinelClassLandingCraft = () => {
  //--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [starshipElement, setStarshipElement] = useState();
  const description = `The Sentinel-class landing craft is a heavily armed transport shuttle designed by Sienar Fleet Systems for the Galactic Empire. Larger and more powerful than the standard Lambda-class shuttle, the Sentinel was primarily used to deliver troops, vehicles, and supplies directly into combat zones. Measuring over 30 meters in length, it featured folding wings, heavy armor, and a formidable array of laser cannons and defensive systems, allowing it to survive hostile landings under enemy fire. Its spacious hold could carry stormtroopers, speeder bikes, and even light vehicles, making it a versatile tool for planetary assaults and occupation missions. The Sentinel’s design emphasized practicality and military strength, embodying the Empire’s strategy of projecting overwhelming force wherever needed. Though not as widely recognized as other Imperial ships, the Sentinel-class landing craft played a crucial role in maintaining control across the galaxy, symbolizing the Empire’s ability to strike quickly and deploy its forces with precision.
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
      callGetStarship(data[2].uid); //--Change this one
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

export default SentinelClassLandingCraft; //--Change this one

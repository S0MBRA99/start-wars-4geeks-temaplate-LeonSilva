import React, { useEffect, useState } from "react";
import PageStarshipsFetchLayout from "../../components/PageStarshipsFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer";
import { getStarships, getStarship } from "../../../src/api/fetchContent";

const DeathStar = () => {
  //--Change this one
  const { store, dispatch } = useGlobalReducer(); //no lo estamos usando pero porque no estamos cargandolo a una global el fetch GET
  const [starshipElement, setStarshipElement] = useState();
  const description = `The Death Star is the ultimate symbol of fear and tyranny in the *Star Wars* galaxy, created by the Galactic Empire as a superweapon of unmatched power. A massive battle station the size of a small moon, it was designed to enforce the Emperor’s will through intimidation and destruction. Armed with a planet-destroying superlaser, the Death Star could annihilate entire worlds in a single blast, as tragically demonstrated with the destruction of Alderaan. Beyond its weaponry, it housed vast numbers of stormtroopers, TIE fighters, and Imperial officers, functioning both as a military base and a terror machine. The first Death Star was destroyed during the Battle of Yavin when Luke Skywalker, guided by the Force, delivered a proton torpedo into its exhaust port. A second, larger Death Star was later constructed, but it too was destroyed during the Battle of Endor. The Death Star represents absolute power, oppression, and the arrogance that ultimately led to the Empire’s downfall.
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
      callGetStarship(data[3].uid); //--Change this one
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

export default DeathStar; //--Change this one

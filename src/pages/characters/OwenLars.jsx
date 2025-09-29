import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const OwenLars = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Owen Lars is a humble moisture farmer from Tatooine and the uncle who raised Luke Skywalker. Married to Beru Whitesun Lars, Owen took responsibility for Luke after Obi-Wan Kenobi entrusted the child to them, following the fall of Anakin Skywalker to the dark side. Though not Force-sensitive or involved in galactic politics, Owen played a crucial role in Luke’s early life by providing him with a stable home and shielding him from the dangers of the wider galaxy. Often portrayed as stern and protective, Owen was determined to keep Luke away from the fate that consumed his father. His cautious nature sometimes put him at odds with Luke’s adventurous spirit, as he feared losing him to the same destiny. Ultimately, Owen and Beru were killed by Imperial stormtroopers searching for the droids, an event that propelled Luke onto his path as a Jedi and into the greater struggle against the Empire.
`;//--Change this one

  function callGetCharacter(uid) {
    getCharacter(uid).then((data) => {
      //console.log(data.result)
      setCharacterElement(data.result);
      console.log(characterElement);
    });
  }

  function callGetCharacters() {
    getCharacters().then((data) => {
      //console.log(data[0])
      callGetCharacter(data[5].uid); //--Change this one
    });
  }

  useEffect(() => {
    callGetCharacters();
  }, []);
  return (
    <>
      {characterElement ? (
        <PageCharactersFetchLayout
          description={description}
          birthYear={characterElement.properties.birth_year}
          eyeColor={characterElement.properties.eye_color}
          gender={characterElement.properties.gender}
          hairColor={characterElement.properties.hair_color}
          height={characterElement.properties.height}
          mass={characterElement.properties.mass}
          name={characterElement.properties.name}
          skinColor={characterElement.properties.skin_color}
          imgCharacter={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${Number(
            characterElement.uid
          )}.jpg`}
        />
      ) : null}
    </>
  );
};

export default OwenLars;//--Change this one

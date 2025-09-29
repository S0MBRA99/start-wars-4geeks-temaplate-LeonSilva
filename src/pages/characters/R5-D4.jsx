import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const R5d4 = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `R5-D4 is an astromech droid from Tatooine whose brief but pivotal role in *Star Wars* shaped the destiny of the galaxy. Known to fans as the “red droid,” R5-D4 was nearly purchased by Owen Lars to serve on his moisture farm. However, when his motivator malfunctioned shortly after being selected, the Jawas offered R2-D2 as a replacement instead. This seemingly minor failure allowed R2-D2 to remain with Luke Skywalker, ensuring the safe delivery of Princess Leia’s message to Obi-Wan Kenobi and setting the stage for the Rebel Alliance’s fight against the Empire. Though often overlooked, R5-D4’s malfunction proved to be a critical turning point in galactic history. Later expanded lore suggests that R5 may have deliberately sabotaged himself to allow R2-D2 to fulfill his mission, portraying him not just as a faulty droid, but as a quiet hero who played his own part in the saga.
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
      callGetCharacter(data[7].uid); //--Change this one
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

export default R5d4;//--Change this one

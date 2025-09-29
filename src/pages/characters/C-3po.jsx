import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const C3po = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `C-3PO is a golden protocol droid designed to interact with humans and other galactic species. Built by Anakin Skywalker on Tatooine, his primary function is translation, as he is fluent in millions of forms of communication. Throughout the Star Wars saga, C-3PO becomes a loyal companion to R2-D2, participating in countless missions for the Rebel Alliance and later the Resistance. Despite his cautious and often fearful nature, C-3PO demonstrates a deep sense of duty and loyalty to his friends. His presence brings both humor and practical insight, being essential for negotiation and communication in critical situations. Throughout the galactic conflicts, he remains dedicated to the cause of freedom and peace, becoming a symbol of service, devotion, and companionship across the galaxy.
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
      callGetCharacter(data[1].uid); //--Change this one
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

export default C3po;//--Change this one

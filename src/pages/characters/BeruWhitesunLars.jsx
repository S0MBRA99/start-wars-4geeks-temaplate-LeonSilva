import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const BeruWhitesunLars = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Beru Whitesun Lars is the kind and caring aunt who helped raise Luke Skywalker on the desert planet of Tatooine. Married to Owen Lars, she devoted herself to providing a nurturing and supportive home for Luke after he was entrusted to their care by Obi-Wan Kenobi. Unlike Owen’s stern and protective demeanor, Beru often showed understanding and compassion toward Luke’s dreams of exploring beyond the farm. Though she lived a simple life as a moisture farmer’s wife, her warmth and quiet strength left a lasting mark on Luke’s character, shaping his sense of hope and empathy. Tragically, Beru and Owen were killed by Imperial stormtroopers searching for R2-D2 and C-3PO, an act that pushed Luke to leave Tatooine and embrace his destiny as a Jedi. Despite her brief presence in the saga, Beru represents love, family, and the quiet sacrifices made far from the battlefield.
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
      callGetCharacter(data[6].uid); //--Change this one
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

export default BeruWhitesunLars;//--Change this one

import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const DarthVader = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Darth Vader is one of the most iconic and feared figures in the *Star Wars* universe. Born as Anakin Skywalker, he was a gifted Jedi Knight whose extraordinary talent with the Force marked him as the Chosen One destined to bring balance. However, his fear of loss and desire for power led him down a darker path. Manipulated by Emperor Palpatine, Anakin fell to the dark side and was reborn as Darth Vader, serving as the Emperor’s enforcer and spreading terror across the galaxy. Encased in black armor and reliant on a life-supporting suit after his duel with Obi-Wan Kenobi, Vader became a symbol of oppression and fear. Yet, beneath the mask remained traces of conflict and humanity. His eventual redemption came through his son, Luke Skywalker, when Vader chose to save him and destroy the Emperor. His story is a tragic tale of corruption, power, and ultimate redemption.
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
      callGetCharacter(data[3].uid); //--Change this one
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

export default DarthVader;//--Change this one

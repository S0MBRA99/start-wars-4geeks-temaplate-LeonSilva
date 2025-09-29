import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const R2d2 = () => {
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `R2-D2 is an astromech droid known for his bravery, resourcefulness, and unwavering loyalty. Built to assist starships in navigation and repair, he quickly proved himself indispensable in countless critical missions across the galaxy. Unlike many droids, R2-D2 displays a bold and adventurous personality, often acting on his own initiative to save his allies from danger. He first served Queen Padmé Amidala during the Clone Wars and later became a trusted companion to Anakin Skywalker, Obi-Wan Kenobi, and Luke Skywalker. Throughout the *Star Wars* saga, R2-D2 plays vital roles, from carrying secret plans of the Death Star to repairing ships in battle and delivering crucial messages. Despite his small size, his courage often surpasses that of those around him. His partnership with C-3PO provides both comedic relief and touching loyalty, making R2-D2 one of the most beloved and iconic figures in the galaxy.
`;

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
      callGetCharacter(data[2].uid);
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

export default R2d2;

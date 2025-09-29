import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const LukeSkywalker = () => {
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Luke Skywalker is one of the most iconic characters in the *Star Wars* saga. He was born on Tatooine and raised by his 
  aunt and uncle, Owen and Beru Lars, without knowing the truth about his parents. His life changed when he discovered a message from Princess Leia, 
  which led him to join Obi-Wan Kenobi in the fight against the Galactic Empire. Luke trained as a Jedi, learning the ways of the Force and facing 
  challenges that tested his courage and morality. He took part in key missions, such as the destruction of the Death Star and the liberation of the 
  galaxy from imperial rule. Throughout his journey, he confronted Darth Vader, discovering that he was his father, which marked his personal and 
  spiritual growth. Eventually, he became a Jedi Master, guiding new generations and seeking to restore balance to the galaxy. His story is one of 
  bravery, redemption, and hope.
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
      callGetCharacter(data[0].uid);
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

export default LukeSkywalker;

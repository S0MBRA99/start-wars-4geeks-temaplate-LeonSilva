import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const ObiWanKenobi = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Obi-Wan Kenobi is one of the most legendary Jedi in the *Star Wars* saga, known for his wisdom, loyalty, and dedication to the Force. Trained as a Padawan by Qui-Gon Jinn, he rose to become a skilled Jedi Knight and later a mentor to Anakin Skywalker. Despite his best efforts, Obi-Wan witnessed Anakin’s tragic fall to the dark side, which haunted him deeply. After defeating his former apprentice in a fateful duel on Mustafar, Obi-Wan went into hiding on Tatooine, watching over Anakin’s son, Luke Skywalker, from a distance. When the time was right, he revealed himself to guide Luke on his first steps toward becoming a Jedi. Calm, patient, and selfless, Obi-Wan served as a beacon of hope during the galaxy’s darkest times. His sacrifice aboard the Death Star allowed Luke and his friends to escape, ensuring that the light of the Jedi would endure through the next generation.
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
      callGetCharacter(data[9].uid); //--Change this one
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

export default ObiWanKenobi;//--Change this one

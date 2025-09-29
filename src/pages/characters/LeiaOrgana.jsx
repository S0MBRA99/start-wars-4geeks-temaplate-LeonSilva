import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const LeiaOrgana = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Leia Organa is a central figure in the *Star Wars* saga, known for her courage, leadership, and unwavering dedication to justice. Born as the daughter of Anakin Skywalker and Padmé Amidala, she was secretly adopted by Senator Bail Organa and raised as the Princess of Alderaan. From a young age, Leia became a strong political leader and a key figure in the Rebel Alliance, fighting tirelessly against the tyranny of the Galactic Empire. Intelligent, brave, and determined, she played pivotal roles in missions such as delivering the Death Star plans, leading battles, and inspiring hope among the rebels. Her bond with her brother, Luke Skywalker, and her relationship with Han Solo further deepened her personal journey. Over time, she balanced her political duties with her responsibilities as a fighter, becoming a symbol of resilience and hope. Leia’s legacy endures as a fearless leader who always put the galaxy’s freedom above her own.
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
      callGetCharacter(data[4].uid); //--Change this one
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

export default LeiaOrgana;//--Change this one

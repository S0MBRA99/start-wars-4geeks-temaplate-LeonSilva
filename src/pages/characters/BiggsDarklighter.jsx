import React, { useEffect, useState } from "react";
import PageCharactersFetchLayout from "../../components/PageCharactersFetchLayout";
import useGlobalReducer from "../../../src/hooks/useGlobalReducer"
import { getCharacter } from "../../../src/api/fetchContent";
import { getCharacters } from "../../../src/api/fetchContent";

const BiggsDarkLighter = () => {//--Change this one
  const { store, dispatch } = useGlobalReducer();
  const [characterElement, setCharacterElement] = useState();
  const description = `Biggs Darklighter is a brave starfighter pilot from Tatooine and one of Luke Skywalker’s dearest childhood friends. Both young men shared dreams of escaping their desert homeworld to pursue greater adventures among the stars. Biggs eventually left to attend the Imperial Academy, where he became an accomplished pilot, but soon turned against the Empire and joined the Rebel Alliance. His reunion with Luke came shortly before the fateful Battle of Yavin, where he flew as part of Red Squadron during the assault on the Death Star. Biggs fought valiantly but was struck down by Darth Vader in the trench run, sacrificing his life in the effort to secure victory for the Rebellion. Though his presence in the saga is brief, Biggs symbolizes loyalty, courage, and the deep bonds of friendship that inspire Luke to carry on. His legacy endures as one of the unsung heroes of the Rebellion.
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
      callGetCharacter(data[8].uid); //--Change this one
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

export default BiggsDarkLighter;//--Change this one

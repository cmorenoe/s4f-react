import { RickMortyCharacter } from "../models";
import { RickMortyCharacterComponent } from ".";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api/character";

const RickMortyList = ({
  characters,
}: {
  characters: Array<RickMortyCharacter>;
}) => {
  const [character, setCharacter] = useState<RickMortyCharacter | null>(null);

  useEffect(() => {
    const getCharacter = async () => {
      if (!character) return;
      const response = await axios.get(`${apiUrl}/${character.id}`);
      console.log(response.data);
    };
    getCharacter();
  }, [character]);

  const selectCharacter = (character: RickMortyCharacter) => {
    console.log("Selected", character.name, character.id);
    setCharacter(character);
  };

  return (
    <>
      {character && (
        <div>
          <h3>Selected character</h3>
          <RickMortyCharacterComponent
            key={character.id}
            character={character}
            selectCharacter={selectCharacter}
          />
        </div>
      )}
      <div>
        <h3>Rick and morty characters list</h3>
        {characters.map((character) => (
          <RickMortyCharacterComponent
            key={character.id}
            character={character}
            selectCharacter={selectCharacter}
          />
        ))}
      </div>
    </>
  );
};

export default RickMortyList;

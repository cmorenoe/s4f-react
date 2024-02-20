import { RickMortyCharacter } from "../models";

function RickMortyCharacterComponent({
  character,
  selectCharacter,
}: {
  character: RickMortyCharacter;
  selectCharacter: (character: RickMortyCharacter) => void;
}) {
  return (
    <div className="character" key={character.id} onClick={() => selectCharacter(character)}>
      <img src={character.image} style={{ height: 90, width: 90 }}></img>{" "}
      {character.name}
    </div>
  );
}

export default RickMortyCharacterComponent;

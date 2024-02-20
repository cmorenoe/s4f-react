import { useState } from "react";

type FootballPlayer = {
  id: number;
  name: string;
};

let nextId = 0;

// Update arrays in state
function FootballPlayers() {
  const [name, setName] = useState<string>("");
  const [players, setPlayers] = useState<Array<FootballPlayer>>([]);

  return (
    <>
      <h1>Football players:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          // WRONG!! Don't mutate state
          //   players.push({
          //     id: nextId++,
          //     name: name,
          //   });
          setPlayers(
            // Replace the state
            [
              // with a new array
              ...players, // that contains all the old items
              { id: nextId++, name: name }, // and one new item at the end
            ]
          );
        }}
      >
        Añadir
      </button>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FootballPlayers;

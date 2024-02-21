import { useEffect, useState } from "react";
import "./App.css";
import { Button, RickMortyList } from "./components";
import React from "react";
import { RickMortyCharacter } from "./models";
import axios from "axios";
// import Counter from "./components/Counter";
// import Profile from "./components/Profile";

const apiUrl = "https://rickandmortyapi.com/api/character";
function App() {
  const [showRickMorty, setShowRickMorty] = useState(false);
  const handleClick = () => {
    setShowRickMorty((prev) => !prev);
  };

  // const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Array<RickMortyCharacter>>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<{ results: RickMortyCharacter[] }>(
        apiUrl
      );
      console.log("rick&morty response api", response.data.results);
      setCharacters(response.data.results);
      // setLoading(false);
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <h1>React for dummies</h1>
        {/* <Profile></Profile> */}
        {/* <Counter /> */}
        <Button text="Mount/Unmmount Rick Morty" handleOnClick={handleClick} />
        {showRickMorty && (
          <RickMortyList characters={characters}></RickMortyList>
        )}
        {/* {loading && <div>Loading...</div>}
        {!loading && <RickMortyList characters={characters} />} */}
      </div>
    </>
  );
}

export default App;

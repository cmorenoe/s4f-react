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
  // const [showRickMorty, setShowRickMorty] = useState(false);
  // const handleClick = () => {
  //   setShowRickMorty((prev) => !prev);
  // };    const OtherComponent = React.lazy(() => import('./OtherComponent'));
  // const RickMortyList = React.lazy(() => import("./components/RickMortyList"));
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Array<RickMortyCharacter>>([]);
  //   useEffect(() => {
  //     console.log("Use effect 1"); // Each render
  //   });

  //   useEffect(() => {
  //     console.log("Use effect 2"); // Only in mount component
  //   }, []);

  //   useEffect(() => {
  //     return () => {
  //       console.log("Effect 3"); // Unmounting component, remove listeners
  //     };
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<{ results: RickMortyCharacter[] }>(
        apiUrl
      );
      console.log(response.data.results);
      setCharacters(response.data.results);
      setLoading(false);
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
        {/* {showRickMorty && <RickMorty></RickMorty>}
        <Button text="Mount/Unmmount Rick Morty" handleOnClick={handleClick} /> */}
        {loading && <div>Loading...</div>}
        {!loading && <RickMortyList characters={characters} />}
      </div>
    </>
  );
}

export default App;

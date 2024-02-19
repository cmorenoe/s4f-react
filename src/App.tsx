import "./App.css";
import Button from "./components/Button";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div>
        <h1>React for dummies</h1>
        <Profile></Profile>
        <Button
          text="Press"
          handleOnClick={() => alert("Pressing the button")}
        ></Button>
      </div>
    </>
  );
}

export default App;

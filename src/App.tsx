import { useEffect, useState } from "react";
import "./App.css";
import { Clock, Form } from "./components";

function App() {
  const useTime = () => {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  };
  return (
    <>
      <div>
        <h1>React for dummies</h1>
        <Clock time={useTime().toLocaleTimeString()} />
        <Form></Form>
      </div>
    </>
  );
}

export default App;

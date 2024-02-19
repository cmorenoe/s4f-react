import { useState } from "react";
import Button from "./Button";

function Counter() {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);

  const add = () => {
    // counter++; //Avoid this, useState instead
    setCounter((counter) => counter + 1);
    console.log(counter);
  };

  const substract = () => {
    // counter--; //Avoid this, useState instead
    setCounter((counter) => counter - 1);
    console.log(counter);
  };

  const add2 = () => {
    // setCounter(counter + 1); // Avoid this
    // setCounter(counter + 1);
    // setCounter((counter) => counter + 1);
    // setCounter((counter) => counter + 1);

    setCounter((counter) => counter + 2);
  };

  return (
    <>
      <label>Counter: {counter}</label>
      <div>
        <Button text="Substract" handleOnClick={substract} />
        <Button text="Add" handleOnClick={add} />
        <Button text="Add2" handleOnClick={add2} />
      </div>
    </>
  );
}

export default Counter;

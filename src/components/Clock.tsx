import React from "react";

function Clock({ time }: { time: string }) {
  console.log("Render clock with time", time); // Show renders
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

export default Clock;

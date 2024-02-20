import React, { useState } from "react";

function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`); // State as a snapshot
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;

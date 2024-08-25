import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  const [city, setCity] = useState(" ");
  const [message, setMessage] = useState(" ");

  function handleCity(event) {
    setCity(event.target.value);
  }
  function Search(event) {
    event.preventDefault();
    setMessage(`It is currenlty 20°C in ${city}
    `);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={Search}>
        <input
          type="search"
          title="search"
          placeholder="Type a city"
          onChange={handleCity}
        />
        <input type="submit" value="Search" />
      </form>
      <strong>{message}</strong>
    </div>
  );
}

import { useState, useRef } from "react";

export default function Player() {
  const playerNameInput = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function setNameHandler() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={playerNameInput} />
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}

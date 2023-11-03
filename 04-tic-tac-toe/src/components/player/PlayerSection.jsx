import "./PlayerSection.css";

import { useState } from "react";

import Player from "./Player";

export default function PlayerSection({activePlayer}) {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");

  return (
    <ol id="players" className="highlight-player">
      <Player key="player_1" name={player1Name} symbol={"X"} isActive={activePlayer === "X"} />
      <Player key="player_2" name={player2Name} symbol={"O"} isActive={activePlayer === "O"} />
    </ol>
  );
}

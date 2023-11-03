import "./PlayerSection.css";

import { useState } from "react";

import Player from "./Player";

export default function PlayerSection() {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");

  return (
    <ol id="players">
      <Player key="player_1" name={player1Name} symbol={"X"} />
      <Player key="player_2" name={player2Name} symbol={"O"} />
    </ol>
  );
}

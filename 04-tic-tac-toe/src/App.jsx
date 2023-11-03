import { useState } from "react";
import PlayerSection from "./components/player/PlayerSection";
import GameBoard from "./components/board/GameBoard";
import Log from "./components/Log";

function getActivePlayer(turnsArray) {
  return turnsArray.length > 0 && turnsArray[0].player === "X" ? "O" : "X";
}

function App() {
  const [turns, setTurns] = useState([]);
  const activePlayer = getActivePlayer(turns);

  function updateGameTurns(rowIndex, columnIndex) {
    setTurns((prevTurns) => {
      const currentPlayer = getActivePlayer(prevTurns);
      return [
        {
          player: currentPlayer,
          square: { row: rowIndex, column: columnIndex },
        },
        ...prevTurns,
      ];
    });
  }

  return (
    <main>
      <div id="game-container">
        <PlayerSection activePlayer={activePlayer} />
        <GameBoard turns={turns} onSelectSquare={updateGameTurns} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;

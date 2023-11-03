import { useState } from "react";
import PlayerSection from "./components/player/PlayerSection";
import GameBoard from "./components/board/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turns, setTurns] = useState([]);

  function updateGameTurns(rowIndex, columnIndex) {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );

    setTurns((prevTurns) => {
      const currentPlayer =
        prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";
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
    </main>
  );
}

export default App;

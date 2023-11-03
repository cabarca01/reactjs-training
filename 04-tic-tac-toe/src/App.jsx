import { useState } from "react";
import PlayerSection from "./components/player/PlayerSection";
import GameBoard from "./components/board/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function changeActivePlayerHandler() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <PlayerSection activePlayer={activePlayer} />
        <GameBoard
          activePlayer={activePlayer}
          onSelectSquare={changeActivePlayerHandler}
        />
      </div>
    </main>
  );
}

export default App;

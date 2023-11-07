import { useState } from "react";
import PlayerSection from "./components/player/PlayerSection";
import GameBoard from "./components/board/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./assets/data";

function getActivePlayer(turnsArray) {
  return turnsArray.length > 0 && turnsArray[0].player === "X" ? "O" : "X";
}

function initializeBoardValues(boardSize) {
  let board = [];
  for (let y = 1; y <= boardSize; y++) {
    let row = [];
    for (let x = 1; x <= boardSize; x++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
}

function checkWinner(board) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstBoardValue = board[combination[0].row][combination[0].column];
    const secondBoardValue = board[combination[1].row][combination[1].column];
    const thirdBoardValue = board[combination[2].row][combination[2].column];

    if (
      firstBoardValue &&
      firstBoardValue === secondBoardValue &&
      firstBoardValue === thirdBoardValue
    ) {
      return firstBoardValue;
    }
  }
  return null;
}

function App() {
  const boardValues = initializeBoardValues(3);
  const [turns, setTurns] = useState([]);
  const activePlayer = getActivePlayer(turns);

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, column } = square;
    boardValues[row][column] = player;
  }

  function updateGameTurnsHandler(rowIndex, columnIndex) {
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

  function gameRestartHandler() {
    setTurns([]);
  }

  const winner = checkWinner(boardValues);
  const isDraw = turns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <PlayerSection activePlayer={activePlayer} />
        {winner || isDraw ? (
          <GameOver winner={winner} onRestart={gameRestartHandler} />
        ) : null}
        <GameBoard
          boardValues={boardValues}
          onSelectSquare={updateGameTurnsHandler}
        />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;

import "./GameBoard.css";

import { useState } from "react";
import BoardButton from "./BoardButton";

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

export default function GameBoard() {
  const boardSize = 3;
  const initialBoardValues = initializeBoardValues(boardSize);
  const [boardValues, setBoardValues] = useState(initialBoardValues);

  function clickHandler(rowIndex, columnIndex) {
    setBoardValues((prevBoard) => {
      const updatedBoardValues = [ ...prevBoard ]
      updatedBoardValues[rowIndex][columnIndex] = "X";
      return updatedBoardValues;
    });
  }

  function constructBoard(boardSize, values) {
    let board = [];
    for (let x = 0; x < boardSize; x++) {
      let row = [];
      for (let y = 0; y < boardSize; y++) {
        row.push(
          <BoardButton
            key={"button_" + x + "-" + y}
            value={values[x][y]}
            onClickFn={() => clickHandler(x,y)}
          />
        );
      }
      board.push(row);
    }
    return board;
  }

  const board = constructBoard(boardSize, boardValues);

  return (
    <ol id="game-board">
      {board.map((boardRow, rowIndex) => (
        <li key={"row_" + (rowIndex + 1)}>
          <ol>{boardRow.map((item) => item)}</ol>
        </li>
      ))}
    </ol>
  );
}

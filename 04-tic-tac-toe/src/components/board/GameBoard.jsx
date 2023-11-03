import "./GameBoard.css";

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

export default function GameBoard({ turns, onSelectSquare }) {
  const boardSize = 3;
  const boardValues = initializeBoardValues(boardSize);

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, column } = square;
    boardValues[row][column] = player;
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
            isDisabled={values[x][y] !== null}
            onClickFn={() => onSelectSquare(x, y)}
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

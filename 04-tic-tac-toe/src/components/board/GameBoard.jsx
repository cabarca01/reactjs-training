import "./GameBoard.css";

import BoardButton from "./BoardButton";

function constructBoard(boardSize, values, onSelectSquare) {
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

export default function GameBoard({ boardValues, onSelectSquare }) {
  const boardSize = boardValues[0].length;
  const board = constructBoard(boardSize, boardValues, onSelectSquare);

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

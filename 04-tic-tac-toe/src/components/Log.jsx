import "./Log.css";

export default function Log({ turns }) {
  return (
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row}-${turn.square.column}}`}>
            {turn.player} selected the square in row: {turn.square.row} and
            column {turn.square.column}
          </li>
        ))}
      </ol>
  );
}

import "./GameOver.css";

export default function GameOver({ winner, onRestart }) {
  const text = winner ? <p>{winner} won!</p> : <p>It's a draw!</p>;
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {text}
      <button onClick={onRestart}>New Match</button>
    </div>
  );
}

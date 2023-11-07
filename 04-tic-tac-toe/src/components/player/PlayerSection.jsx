import "./PlayerSection.css";
import Player from "./Player";

export default function PlayerSection({activePlayer, onSavePlayer}) {
 
  return (
    <ol id="players" className="highlight-player">
      <Player key="player_1" name="Player 1" symbol={"X"} isActive={activePlayer === "X"} onSavePlayer={onSavePlayer} />
      <Player key="player_2" name="Player 2" symbol={"O"} isActive={activePlayer === "O"} onSavePlayer={onSavePlayer} />
    </ol>
  );
}

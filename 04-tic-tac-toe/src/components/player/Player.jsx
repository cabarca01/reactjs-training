import "./Player.css";

import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const playerName = isEdit ? (
    <input type="text" required value={editedName} onChange={nameChangeHandler}/>
  ) : (
    <span className="player-name">{editedName}</span>
  );

  function clickHandler() {
    setIsEdit(previousState => !previousState);
  }

  function nameChangeHandler(event) {
    setEditedName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}

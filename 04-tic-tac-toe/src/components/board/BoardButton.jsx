import "./BoardButton.css";

import { useState } from "react";

export default function BoardButton({ value, onClickFn }) {
  return <li><button onClick={onClickFn}>{value}</button></li>;
}

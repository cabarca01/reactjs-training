import "./BoardButton.css";

import { useState } from "react";

export default function BoardButton({ value, isDisabled, onClickFn }) {
  return <li><button disabled={isDisabled} onClick={onClickFn}>{value}</button></li>;
}

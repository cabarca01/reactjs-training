import "./Header.css";
import logoImg from "../assets/logo.jpg";

import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Plates and dished with skyline" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button isTextOnly={true}>Cart (0)</Button>
      </nav>
    </header>
  );
}

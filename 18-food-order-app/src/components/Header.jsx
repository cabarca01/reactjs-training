import "./Header.css";
import logoImg from "../assets/logo.jpg";

import { useContext } from "react";
import { CartContext } from "../contexts/shopping-cart";

import Button from "./UI/Button";

export default function Header() {
  const {items} = useContext(CartContext);
  
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Plates and dished with skyline" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button isTextOnly={true}>Cart ({items.length})</Button>
      </nav>
    </header>
  );
}

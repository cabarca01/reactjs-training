import "./Header.css";
import logoImg from "../assets/logo.jpg";

import { useContext } from "react";
import { CartContext } from "../contexts/shopping-cart";

import Button from "./UI/Button";

import Cart from "./Cart";
import { ShoppingJourneyContext } from "../contexts/shopping-journey";
import Checkout from "./Checkout";

export default function Header() {
  const { items } = useContext(CartContext);
  const { step, openCart } = useContext(ShoppingJourneyContext);

  return (
    <>
      {step === "checkout" ? <Checkout /> : <Cart />}

      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="Plates and dished with skyline" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button isTextOnly={true} type="button" onClick={openCart}>
            Cart ({items.length})
          </Button>
        </nav>
      </header>
    </>
  );
}

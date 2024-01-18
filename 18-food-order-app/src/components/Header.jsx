import "./Header.css";
import logoImg from "../assets/logo.jpg";

import { useContext, useState } from "react";
import { CartContext } from "../contexts/shopping-cart";

import Button from "./UI/Button";
import Modal from "./UI/Modal";
import Cart from "./Cart";

export default function Header() {
  const { items } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function openCartHandler() {
    setIsCartOpen(true);
  }

  return (
    <>
      <Modal keyId="cartModal" open={isCartOpen} className="cart">
        <Cart />
      </Modal>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="Plates and dished with skyline" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button isTextOnly={true} type="button" onClick={openCartHandler}>
            Cart ({items.length})
          </Button>
        </nav>
      </header>
    </>
  );
}

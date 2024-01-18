import "./Cart.css";

import { useContext } from "react";
import { CartContext } from "../contexts/shopping-cart.jsx";

import { formatter } from "../util/utils.js";
import Button from "./UI/Button.jsx";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const cartTotal = items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <p>{`${item.name} - ${item.quantity} x ${formatter.format(
                item.price
              )}`}</p>
              <div className="cart-item-actions">
                <button
                  onClick={() => {
                    addItem(item.id, item.name, item.price);
                  }}
                >
                  +
                </button>
                {item.quantity}
                <button
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="cart-total">{formatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <Button isTextOnly={true}>Close</Button>
          <Button>Go to Checkout</Button>
        </p>
      </div>
    </div>
  );
}

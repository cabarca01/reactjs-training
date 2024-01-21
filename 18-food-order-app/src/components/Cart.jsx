import "./Cart.css";

import { useContext } from "react";

import { formatter, getTotal } from "../util/utils.js";

import Button from "./UI/Button.jsx";
import Modal from "./UI/Modal.jsx";
import { ShoppingJourneyContext } from "../contexts/shopping-journey.jsx";
import { CartContext } from "../contexts/shopping-cart.jsx";

export default function Cart() {
  const { step, openCheckout, closeModal } = useContext(ShoppingJourneyContext);
  const { items, addItem, removeItem } = useContext(CartContext);
  const cartTotal = getTotal(items);

  return (
    <Modal keyId="cartModal" open={step === "cart"} className="cart">
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
            <Button isTextOnly={true} type="button" onClick={closeModal}>
              Close
            </Button>
            {items.length > 0 && (
              <Button type="button" onClick={openCheckout}>
                Go to Checkout
              </Button>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
}

import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function shoppingCartReducer(cartState, action) {
  const updatedCartItems = [...cartState.items];

  if (action.identifier == "ADD_ITEM") {
    const { id, name, price } = action.payload.item;
    const itemIndex = cartState.items.findIndex((item) => item.id === id);
    if (itemIndex < 0) {
      updatedCartItems.push({
        id,
        name,
        price,
        quantity: 1,
      });
    } else {
      updatedCartItems[itemIndex].quantity += 1;
    }
  } else {
    const id = action.payload.id;
    const itemIndex = cartState.items.findIndex((item) => item.id === id);
    const updatedItem = { ...updatedCartItems[itemIndex] };

    updatedItem.quantity -= 1;
    updatedItem.quantity <= 0
      ? (updatedCartItems[itemIndex] = updatedItem)
      : updatedCartItems.splice(itemIndex, 1);
  }
  return {
    items: updatedCartItems,
  };
}
export default function CartContextProvider({ children }) {
  const [currentShoppingCart, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function addItemHandler(itemId, name, price) {
    shoppingCartDispatch({
      identifier: "ADD_ITEM",
      payload: {
        id: itemId,
        name,
        price: parseFloat(price),
      },
    });
  }

  function removeItemHandler(itemId) {
    shoppingCartDispatch({
      identifier: "REMOVE_ITEM",
      payload: {
        id: itemId,
      },
    });
  }

  const initialCartValue = {
    items: currentShoppingCart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={initialCartValue}>
      {children}
    </CartContext.Provider>
  );
}

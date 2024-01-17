import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function shoppingCartReducer(cartState, action) {
  const updatedCartItems = [...cartState.items];

  if (action.identifier === "ADD_ITEM") {
    const newItem = action.payload.item;
    const itemIndex = cartState.items.findIndex((item) => item.id === newItem.id);
    if (itemIndex < 0) {
      updatedCartItems.push({
        ...newItem,
        quantity: 1,
      });
    } else {
      const updatedItem = {...cartState.items[itemIndex]}
      updatedItem.quantity += 1;
      updatedCartItems[itemIndex] = updatedItem;
    }
  } else if (action.identifier === "REMOVE_ITEM") {
    const id = action.payload.id;
    const itemIndex = cartState.items.findIndex((item) => item.id === id);
    const updatedItem = { ...cartState.items[itemIndex] };

    updatedItem.quantity -= 1;
    updatedItem.quantity > 0
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
        item: {
          id: itemId,
          name,
          price: parseFloat(price),
        },
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
    items: currentShoppingCart.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={initialCartValue}>
      {children}
    </CartContext.Provider>
  );
}

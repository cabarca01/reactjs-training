import { createContext, useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  onUpdateItemQuantity: () => {},
  onAddToCart: () => {},
});

function shoppingCartReducer(cartState, action) {
  const updatedItems = [...cartState.items];

  if (action.identifier === "ADD_ITEM") {
    const productId = action.payload.productId;

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === productId
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === productId
      );
      updatedItems.push({
        id: productId,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
  } else if (action.identifier === "UPDATE_ITEM") {
    const {productId, amount} = action.payload;

    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
  }

  return {
    items: updatedItems,
  };
}

export default function CartContextProvider({ children }) {
  const [currentShoppingCart, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(productId) {
    shoppingCartDispatch({
      identifier: "ADD_ITEM",
      payload: {
        productId,
      },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      identifier: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      }
    });
  }

  const cartContextValue = {
    items: currentShoppingCart.items,
    onUpdateItemQuantity: handleUpdateCartItemQuantity,
    onAddToCart: handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

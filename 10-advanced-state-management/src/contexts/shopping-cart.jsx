import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  onUpdateItemQuantity: () => {},
  onAddToCart: () => {},
});

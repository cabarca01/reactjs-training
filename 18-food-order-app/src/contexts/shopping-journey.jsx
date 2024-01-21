import { createContext, useState } from "react";

export const ShoppingJourneyContext = createContext({
  step: "",
  openCart: () => {},
  closeCart: () => {},
  openCheckout: () => {},
  closeCheckout: () => {},
});

export default function ShoppingJourneyContextProvider({ children }) {
  const [shoppingJourneyStep, setShoppingJourneyStep] = useState("");

  function openCartHandler() {
    setShoppingJourneyStep("cart");
  }

  function closeCartHandler() {
    setShoppingJourneyStep("");
  }

  function openCheckoutHandler() {
    setShoppingJourneyStep("checkout");
  }

  function closeCheckoutHandler() {
    setShoppingJourneyStep("");
  }

  const initialContextValue = {
    step: shoppingJourneyStep,
    openCart: openCartHandler,
    closeCart: closeCartHandler,
    openCheckout: openCheckoutHandler,
    closeCheckout: closeCheckoutHandler,
  };

  return (
    <ShoppingJourneyContext.Provider value={initialContextValue}>
      {children}
    </ShoppingJourneyContext.Provider>
  );
}

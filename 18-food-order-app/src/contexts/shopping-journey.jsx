import { createContext, useState } from "react";

export const ShoppingJourneyContext = createContext({
  step: "",
  openCart: () => {},
  openCheckout: () => {},
  closeModal: () => {},
});

export default function ShoppingJourneyContextProvider({ children }) {
  const [shoppingJourneyStep, setShoppingJourneyStep] = useState("");

  function openCartHandler() {
    setShoppingJourneyStep("cart");
  }

  function closeModalHandler() {
    setShoppingJourneyStep("");
  }

  function openCheckoutHandler() {
    setShoppingJourneyStep("checkout");
  }

  const initialContextValue = {
    step: shoppingJourneyStep,
    openCart: openCartHandler,
    openCheckout: openCheckoutHandler,
    closeModal: closeModalHandler
  };

  return (
    <ShoppingJourneyContext.Provider value={initialContextValue}>
      {children}
    </ShoppingJourneyContext.Provider>
  );
}

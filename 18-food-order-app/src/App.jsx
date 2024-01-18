import Header from "./components/Header";
import MealList from "./components/meals/MealList";
import CartContextProvider from "./contexts/shopping-cart";
import ShoppingJourneyContextProvider from "./contexts/shopping-journey";

function App() {
  return (
    <ShoppingJourneyContextProvider>
      <CartContextProvider>
        <Header />
        <MealList />
      </CartContextProvider>
    </ShoppingJourneyContextProvider>
  );
}

export default App;

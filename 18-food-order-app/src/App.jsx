import Header from "./components/Header";
import MealList from "./components/meals/MealList";
import CartContextProvider from "./contexts/shopping-cart";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <MealList />
    </CartContextProvider>
  );
}

export default App;

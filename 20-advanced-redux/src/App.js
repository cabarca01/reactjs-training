import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { getCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const isCartChanged = useSelector((state) => state.cart.isCartChanged);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial || !isCartChanged) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, isCartChanged, dispatch]);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

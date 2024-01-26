import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import { uiActions } from "./store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data.",
        })
      );

      const response = await fetch(
        "https://react-learning-2024-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      const respBody = await response.json();
      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: respBody.message || "Saving cart data failed.",
          })
        );
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data stored successfully.",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message || "Saving cart data failed.",
        })
      );
    });
  }, [cart, dispatch]);

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

import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const updateCartURL =
  "https://react-learning-2024-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export function getCartData() {
  return async (dispatch) => {
    const getCart = async () => {
      const response = await fetch(updateCartURL);
      const respBody = await response.json();

      if (!response.ok) {
        throw new Error(respBody.message || "Failed to fetch cart data.");
      }
      return respBody;
    };

    try {
      const cartData = await getCart();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const saveCart = async () => {
      const response = await fetch(updateCartURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      const respBody = await response.json();

      if (!response.ok) {
        throw new Error(respBody.message || "Saving cart data failed.");
      }
    };

    try {
      await saveCart();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data stored successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
}

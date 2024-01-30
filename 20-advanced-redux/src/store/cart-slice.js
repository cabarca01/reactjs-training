import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const initialCartState = {
  items: [],
  isVisible: false,
};

const updateCartURL = "https://react-learning-2024-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart: (state) => {
      state.isVisible = true;
    },
    hideCart: (state) => {
      state.isVisible = false;
    },
    addItem: (state, action) => {
      const newItem = { ...action.payload.item, quantity: 1 };
      const itemIndex = state.items.findIndex((item) => item.id === newItem.id);
      itemIndex >= 0
        ? (state.items[itemIndex].quantity += 1)
        : state.items.push(newItem);
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].quantity === 1
        ? state.items.splice(itemIndex, 1)
        : (state.items[itemIndex].quantity -= 1);
    },
  },
});

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
      const response = await fetch(
        updateCartURL,
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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

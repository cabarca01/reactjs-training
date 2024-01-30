import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  isVisible: false,
  isCartChanged: false,
};

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
      state.isCartChanged = true;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].quantity === 1
        ? state.items.splice(itemIndex, 1)
        : (state.items[itemIndex].quantity -= 1);
      state.isCartChanged = true;
    },
    replaceCart: (state, action) => {
      state.items = action.payload || [];
      state.isCartChanged = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

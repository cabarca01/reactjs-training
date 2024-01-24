import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  isVisible: false,
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
      const newItem = { ...action.payload.item, quatity: 1 };
      const itemIndex = state.items.findIndex((item) => item.id === newItem.id);
      itemIndex > 0
        ? (state.items[itemIndex].item.quatity += 1)
        : state.items.push(newItem);
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].quatity === 1
        ? state.items.splice(itemIndex, 1)
        : (state.items[itemIndex].quatity -= 1);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/productsData.json'; // Adjust the path if needed

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: productsData.products,
    cart: [],
    view: 'home', // 'home' or 'cart'
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        const existing = state.cart.find((item) => item.id === id);
        if (existing) {
          existing.quantity = quantity;
        }
      }
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, setView } = shopSlice.actions;
export default shopSlice.reducer;
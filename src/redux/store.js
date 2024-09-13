import { configureStore } from '@reduxjs/toolkit';
import { tulipReducer } from './slices/tulips';
import cartReducer from './slices/cart';

const store = configureStore({
  reducer: {
    tulips: tulipReducer,
    cart: cartReducer,
  },
});

export default store;

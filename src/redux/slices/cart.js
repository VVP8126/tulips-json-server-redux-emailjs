import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageManager } from '../../utils/LocalStorageManager';
import { CART, TOTAL_COUNT, TOTAL_SUM } from '../../utils/localStorageKeys';

const initialState = {
  cart: LocalStorageManager.loadTulips(CART), // {tulipId, price, title, img, count}
  totalCount: LocalStorageManager.loadNumber(TOTAL_COUNT),
  totalSum: LocalStorageManager.loadNumber(TOTAL_SUM),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let tulip = state.cart.find((item) => item.tulipId === action.payload.tulipId);
      if (!tulip) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart = state.cart.map((item) => {
          if (item.tulipId === action.payload.tulipId) {
            item.count += 1;
          }
          return item;
        });
        // One more way (adds existing item in a cart to the end of cart array):
        // tulip.count = tulip.count + 1;
        // [ ...state.cart.filter((item) => item.tulipId !== action.payload.tulipId), tulip ];
      }
      state.totalCount = state.totalCount + 1;
      state.totalSum = state.totalSum + action.payload.price;

      // Save data in LocalStorage
      LocalStorageManager.saveTulips(state.cart, CART);
      LocalStorageManager.saveNumber(state.totalCount, TOTAL_COUNT);
      LocalStorageManager.saveNumber(state.totalSum, TOTAL_SUM);
    },

    removeFromCart: (state, action) => {
      let tulipToDelete = state.cart.find((item) => item.tulipId === action.payload.tulipId);
      if (tulipToDelete) {
        if (tulipToDelete.count > 1) {
          state.cart = state.cart.map((item) => {
            if (item.tulipId === action.payload.tulipId) {
              item.count -= 1;
            }
            return item;
          });
        } else {
          state.cart = state.cart.filter((item) => item.tulipId !== action.payload.tulipId);
        }
        state.totalCount = state.totalCount - 1;
        state.totalSum = state.totalSum - tulipToDelete.price;

        // Save data in LocalStorage
        LocalStorageManager.saveTulips(state.cart, CART);
        LocalStorageManager.saveNumber(state.totalCount, TOTAL_COUNT);
        LocalStorageManager.saveNumber(state.totalSum, TOTAL_SUM);
      } else {
        console.log('Tulip to delete from a cart not found !');
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalCount = 0;
      state.totalSum = 0;

      LocalStorageManager.saveTulips(state.cart, CART);
      LocalStorageManager.saveNumber(state.totalCount, TOTAL_COUNT);
      LocalStorageManager.saveNumber(state.totalSum, TOTAL_SUM);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

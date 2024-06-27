import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice';
import productSlide from './features/product/productSlide';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        product: productSlide,
        cart: cartSlice
    },
});
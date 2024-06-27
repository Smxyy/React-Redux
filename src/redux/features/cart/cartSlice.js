import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    quantity: 0,
    totalPrice: 0.0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            //check if product exists
            const existingProduct = state.cartItems.some((item) => item.id === action.payload.id);
            console.log('existingProduct', existingProduct);

            //if product exists, increase the qty
            if (existingProduct) {
                state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        item.qty += 1;
                        state.totalItems += 1;
                    }
                })
            } else {
                state.totalItems += 1;
                state.cartItems.push(action.payload);
                state.totalPrice += parseFloat(action.payload.price);
            }
        },
        increaseQuantity: (state, action) => {
            //if product exists
            state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    item.qty += 1;
                    state.totalItems += 1;
                    state.totalPrice += parseFloat(item.price);
                }
            })
        },
        decreaseQuantity: (state, action) => {
            //if product exists
            state.cartItems.map((item) => {
                if (item.id === action.payload.id && item.qty === 1) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                    state.totalItems -= 1;
                    state.totalPrice -= parseFloat(item.price);
                } else if (item.id === action.payload.id && item.qty > 1) {
                    state.totalItems -= 1;
                    item.qty -= 1;
                    state.totalPrice -= parseFloat(item.price);
                }
            })
        },
        removeAll: (state) => {
            state.cartItems = [];
            state.totalItems = 0;
            state.totalPrice = 0.0;
        }
    }
})

//export action
export const { addToCard, increaseQuantity, decreaseQuantity, removeAll } = cartSlice.actions;

//export selector
export const selectTotalItems = ((state) => state.cart.totalItems)
export const selectCardItems = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;

//exportreducer
export default cartSlice.reducer
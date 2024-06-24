import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    //state = initialState
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

//export action
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectValue = state => state.counter.value

//export reducer
export default counterSlice.reducer
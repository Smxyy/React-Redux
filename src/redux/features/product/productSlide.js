import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

//state
const initialState = {
    products: [],
    product: {},
    // idle -> |pending|fulfilled|rejected|
    status: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async() => {
        const response = await fetch(`${BASE_URL}products`);
        const data = await response.json();
        console.log("data", data)
        return data.results;
    }
);

//fetch product by id
export const fetchProductById = createAsyncThunk(
    "product/fetchProductById",
    async(id) => {
        const response = await fetch(`${BASE_URL}products/${id}`);
        const data = await response.json();
        console.log("data", data)
        return data;
    }
);

export const productSlide = createSlice({
    name: 'products',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "success";
                state.product = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

//export reducer
export default productSlide.reducer;
//state.reducer.product(in initialState)
export const selectAllProducts = ((state) => state.product.products);
export const selectProductById = ((state) => state.product.product);
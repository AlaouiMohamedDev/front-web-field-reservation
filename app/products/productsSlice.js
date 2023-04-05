import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

const URL = 'http://127.0.0.1:5000/products';

const initialState = []

export const fetchProducts= createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(URL);
    return response.data
})


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllProducts = (state) => state.products;

//export const selectUserById = (state, userId) =>state.users.find(user => user.id === userId)

export default productsSlice.reducer
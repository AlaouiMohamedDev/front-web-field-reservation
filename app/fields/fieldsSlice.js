import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

const URL = 'http://127.0.0.1:8000/entity/list_fields';

const initialState = []

export const fetchFields= createAsyncThunk('fields/fetchFields', async () => {
    const response = await axios.get(URL);
    return response.data
})


const fieldsSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFields.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllFields = (state) => state.fields;

//export const selectUserById = (state, userId) =>state.users.find(user => user.id === userId)

export default fieldsSlice.reducer
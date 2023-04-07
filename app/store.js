import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from './fields/fieldsSlice'


export const store = configureStore({
    reducer: {
        fields : fieldsReducer,
    }
})
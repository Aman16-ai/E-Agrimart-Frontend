import { configureStore } from "@reduxjs/toolkit";
import multistepFormReducer from "./slices/multistepFormSlice";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/ProductSlice"
export const store = configureStore({
    reducer: {
        multiStepForm : multistepFormReducer,
        User: userReducer,
        product:productReducer
    }
})
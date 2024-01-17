import { configureStore } from "@reduxjs/toolkit";
import multistepFormReducer from "./slices/multistepFormSlice";
import userReducer from "./slices/UserSlice"
import productReducer from "./slices/ProductSlice"
import bidModalReducer from "./slices/BidModalSlice";
export const store = configureStore({
    reducer: {
        multiStepForm : multistepFormReducer,
        user: userReducer,
        product:productReducer,
        bidModal : bidModalReducer
    }
})
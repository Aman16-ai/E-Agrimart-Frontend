import { configureStore } from "@reduxjs/toolkit";
import multistepFormReducer from "./slices/multistepFormSlice";
import userReducer from "./slices/UserSlice"
import productReducer from "./slices/ProductSlice"
import bidModalReducer from "./slices/BidModalSlice";
import BidDashBoardReducer from "./slices/BidDashBoardSlice";
import BidSocketReducer from "./slices/BidSocketSlice";
export const store = configureStore({
    reducer: {
        multiStepForm : multistepFormReducer,
        user: userReducer,
        product:productReducer,
        bidModal : bidModalReducer,
        BidDashBoard : BidDashBoardReducer,
        BidSocket : BidSocketReducer
    }
})
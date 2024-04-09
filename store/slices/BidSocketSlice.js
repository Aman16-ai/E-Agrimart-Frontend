import { createSlice } from "@reduxjs/toolkit";

export const BidSocketSlice = createSlice({
    name:"BidSocket",
    initialState : {
        socket : null
    },
    reducers : {
        initSocket : (state,action) => {
            state.socket = action.payload
        },
        disconnectSocket : (state,action) => {
            state.socket = null;
        }
    }
})

export const {initSocket,disconnectSocket} = BidSocketSlice.actions
export const selectSocketState = (state) => state.BidSocket.socket
export default BidSocketSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


export const bidModalSlice = createSlice({
    name:"bidModal",
    initialState: {
        open:false,
        type:'comment',
        dialogYes : false
    },
    reducers : {
        setOpen : (state,action) => {
            console.log('modal reducer value',action.payload)
            state.open = action.payload
        },
        updateType : (state,action) => {
            state.type = action.payload
        },
        updateAction : (state,action) => {
            console.log('modal action value',action.payload)
            state.dialogYes = action.payload
        }
    }
})

export const selectModalOpen = (state) => state.bidModal.open
export const selectModalType = (state) => state.bidModal.type
export const selectModalAction = (state) => state.bidModal.dialogYes
export const {setOpen,updateType,updateAction} = bidModalSlice.actions
export default bidModalSlice.reducer
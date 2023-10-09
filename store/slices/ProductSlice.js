import { getAllProducts } from "@/service/Products";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getAllProductsThunk = createAsyncThunk("getAllProducts/getAllProducts",async(payload,thunkApi) => {
    try {
        const result = await getAllProducts()
        console.log("product thunk --------->",result)
        return result
    }
    catch(err) {
        return thunkApi.rejectWithValue()
    }
})


export const productSlice = createSlice({
    name:"product",
    initialState : {
        allProducts: [],
        isLoading : false
    },

    extraReducers : {
        [getAllProductsThunk.fulfilled] : (state,action) => {
            state.allProducts = action.payload
            state.isLoading = false
        },
        [getAllProductsThunk.pending] : (state,action) => {
            state.isLoading = true
        },
        [getAllProductsThunk.rejected] : (state,action) => {
            state.isLoading = false
            
        }
    }
})

export const selectAllProductState = (state) => state.product.allProducts

export default productSlice.reducer
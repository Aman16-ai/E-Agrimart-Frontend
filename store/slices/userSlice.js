import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "@/service/user";

export const userDetailsThunk = createAsyncThunk('userDetails/userDetails',async(thunkApi) => {
    try {
        const result = await getUserDetails()
        return result
    }
    catch(err) {
        return thunkApi.rejectWithValue
    }
})
export const userSlice = createSlice({
    name:"user",
    initialState : {
        userData : {},
        token : "",
        isAuthenticated : false
    },
    reducers : {
        setIsAuthenticated : (state,action) => {
            state.isAuthenticated = action.payload
        }
    },
    extraReducers : {
        [userDetailsThunk.fulfilled] : (state,action) => {
            console.log('user data thunk --------> ',action.payload)
            state.userData = action.payload
            state.isAuthenticated = true
        },
        [userDetailsThunk.rejected] : (state,action) => {
            state.userData = null
            state.isAuthenticated = false
        }
    }
})

export const {setIsAuthenticated} = userSlice.actions
export const selectUserData = (state) => state.user.userData
export const selectIsAuthenticated = (state) => state.user.isAuthenticated
export default userSlice.reducer

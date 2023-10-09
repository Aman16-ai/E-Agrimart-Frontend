import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { registerFarmer } from "@/service/farmer";


export const registerUserThunk = createAsyncThunk("register/register",async(payload,thunkApi) => {
    try {
        const result = await registerFarmer(payload)
        console.log("registeration result --------->",result)
        return result
    }
    catch(err) {
        return thunkApi.rejectWithValue()
    }
})


export const userSlice = createSlice({
    name:"User",
    initialState : {
        data : null,
        token: null,
        isAuthenticated : false,
        isLoading : false
    },

    extraReducers : {
        [registerUserThunk.fulfilled] : (state,action) => {
            state.token = action.payload?.access
            if(action.payload?.user_type === 'Farmer') {
                const {userProfile,soil_N,soil_P,soil_K,soil_Ph,soil_moisture,crops} = action.payload
                state.data = {userProfile,soil_N,soil_P,soil_K,soil_Ph,soil_moisture,crops}
            }
            else {
                const {userProfile} = action.payload
                state.data = userProfile
            }
            state.isAuthenticated = true
            state.isLoading = false
        },
        [registerUserThunk.pending] : (state,action) => {
            state.isLoading = true
        },
        [registerUserThunk.rejected] : (state,action) => {
            state.isLoading = false
            state.data = null
            state.token = null
            state.isAuthenticated = false
        }
    }
})

export const selectUserState = (state) => state.User

export default userSlice.reducer
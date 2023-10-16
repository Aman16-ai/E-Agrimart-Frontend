import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { registerFarmer } from "@/service/farmer";
import { loginUser } from "@/service/user";


// export const registerUserThunk = createAsyncThunk("register/register",async(payload,thunkApi) => {
//     try {
//         const result = await registerFarmer(payload)
//         console.log("registeration result --------->",result)
//         return result
//     }
//     catch(err) {
//         return thunkApi.rejectWithValue()
//     }
// })

export const loginUserThunk = createAsyncThunk('login/login',async(payload,thunkApi) => {
    try {
        const result = await loginUser(payload)
        return result
    }
    catch(err) {
        return thunkApi.rejectWithValue
    }
})

export const loginSlice = createSlice({
    name:"login",
    initialState : {
        credential : {
            'username' : '',
            'password' : ''
        },
        'token' : ""
    },

    extraReducers : {
        [loginUserThunk.fulfilled] : (state,action) => {
            state.token = action.payload?.access
        }
    }
})

export default loginSlice.reducer
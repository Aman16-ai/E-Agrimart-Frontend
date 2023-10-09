import { createSlice } from "@reduxjs/toolkit";

export const multiStepFormSlice = createSlice({
    name:'multiStepForm',
    initialState : {
        "userProfile": {
            "user": {
            "password": "",
            "username": "",
            "first_name": "",
            "last_name": "",
            "email": ""
        },
        "address": {
            "pincode": -1,
            "city": "",
            "state": "",
            "landmark": ""
        },
        "user_type": "",
        "contact_no": -1
        },
        "crops":[],
        "soil_N" : -1,
        "soil_P" : -1,
        "soil_K" : -1,
        "soil_Ph" : -1,
        "soil_moisture" : -1
    },
    reducers : {
        updatePersonalDetails : (state,action) => {
            if(action.payload.name !== 'contact_no' && action.payload.name !== 'user_type')
                state.userProfile.user = {...state.userProfile.user,[action.payload.name]:action.payload.value}
            else 
                state.userProfile = {...state.userProfile,[action.payload.name]:action.payload.value}
        },
        updateAddress: (state,action) => {
            state.userProfile.address = {...state.userProfile.address,[action.payload.name]:action.payload.value}
        },

        updateCrops : (state,action) => {
            state.crops = [...action.payload]
        },
        updateSoilN : (state,action) => {
            state.soil_N = action.payload
        },
        updateSoilP : (state,action) => {
            state.soil_P = action.payload
        },
        updateSoilPh : (state,action) => {
            state.soil_Ph = action.payload
        },
        updateSoilK : (state,action) => {
            state.soil_K = action.payload
        },
        updateSoilMoisture : (state,action) => {
            state.soil_moisture = action.payload
        }
    }
})

export const {updatePersonalDetails,updateAddress,updateCrops,updateSoilK,updateSoilMoisture,updateSoilN,updateSoilP,updateSoilPh} = multiStepFormSlice.actions

export const selectFormState = (state) => state.multiStepForm
export const selectFormAddressState = (state) => state.multiStepForm.userProfile.address
export default multiStepFormSlice.reducer
import { FARMER_REGISTERATION_API } from "../apis"


export const registerFarmer = async(payload) => {
    const response = await fetch(FARMER_REGISTERATION_API,{
        method : "POST",      
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
    })

    if(response.status !== 200) {
        throw new Error("Failed to register farmer")
    }
    const data = await response.json()
    return data?.Response
}
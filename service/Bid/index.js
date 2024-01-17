import { BID_API } from "../apis"

export const addBidService = async(payload) => {
    const response = await fetch(BID_API,{
        method : "POST",      
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("e-auth-token")}`,
        },
        body : JSON.stringify(payload)
    })

    // if(response.status !== 200) {
    //     throw new Error("Failed to create bid")
    // }
    const data = await response.json()
    return data?.Response
}
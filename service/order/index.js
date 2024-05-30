import { ORDER_API } from "../apis"

export const CreateOrderService = async(payload) => {
    let url = ORDER_API
    const response = await fetch(url,{
        method : "POST",      
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("e-auth-token")}`,
        },
        body : JSON.stringify(payload)
    })
    if(response.status !== 201) {
        throw new Error("Failed to create order")
    }
    const data = await response.json()
    return data?.Response
}
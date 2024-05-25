import { GET_ALL_PRODUCTS_API } from "../apis"

export const getAllProducts = async(query,authTrue=false) => {
    let url = GET_ALL_PRODUCTS_API
    if(query !== undefined) {
        url += query
    }
    const response = await fetch(url,{
        method : "GET",      
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: authTrue?`Bearer ${localStorage.getItem("e-auth-token")}`:null,
        },
    })
    if(response.status !== 200) {
        throw new Error("Failed to get products")
    }
    const data = await response.json()
    return data?.Response
}

export const getProductById = async(id) => {
    const response = await fetch(GET_ALL_PRODUCTS_API+"/"+id,{cache:"no-store"})
    const data = await response.json()
    return data?.Response
}
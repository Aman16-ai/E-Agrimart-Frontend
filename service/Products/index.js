import { GET_ALL_PRODUCTS_API } from "../apis"

export const getAllProducts = async(query) => {
    const response = await fetch(GET_ALL_PRODUCTS_API)
    if(response.status !== 200) {
        throw new Error("Failed to get products")
    }
    const data = await response.json()
    return data?.Response
}

export const getProductById = async(id) => {
    const response = await fetch(GET_ALL_PRODUCTS_API+id,{cache:"no-store"})
    const data = await response.json()
    return data?.Response
}

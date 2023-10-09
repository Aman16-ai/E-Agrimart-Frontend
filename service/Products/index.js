import { GET_ALL_PRODUCTS_API } from "../apis"

export const getAllProducts = async() => {
    const response = await fetch(GET_ALL_PRODUCTS_API)
    if(response.status !== 200) {
        throw new Error("Failed to get products")
    }
    const data = await response.json()
    return data?.Response
}
import { GET_ALL_CROPS_API } from "../apis"

export const getAllCrops = async() => {
    const response = await fetch(GET_ALL_CROPS_API)
    if(response.status !== 200) {
        throw new Error("Failed to get crops")
    }
    const data = await response.json()
    return data?.Response
}
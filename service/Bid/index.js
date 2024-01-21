import { BID_API, BID_DASHBORAD_API } from "../apis"

export const addBidService = async(payload) => {
    const response = await fetch(BID_API+"/",{
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

export const getAllBidsServices = async(query) => {
    let url = BID_API
    if(query !== undefined) {
        url += query
        console.log('get all bids api')
    }

    const response = await fetch(url,{
        method : "GET",      
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("e-auth-token")}`,
        },
    })
    if(response.status !== 200) {
        throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    return data?.Response
}

export const getBidDashBoardData = async(query) => {
    let url = BID_DASHBORAD_API
    if(query !== undefined) {
        url += query
        console.log('get bid dashboard api',url)
    }

    const response = await fetch(url,{
        method : "GET",      
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("e-auth-token")}`,
        },
    })
    if(response.status !== 200) {
        throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    return data?.Response
}
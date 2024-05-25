const BASE_URL = "http://127.0.0.1:8000"

//Crops apis
export const GET_ALL_CROPS_API = BASE_URL + "/api/farmer/crop/"
export const FARMER_REGISTERATION_API = BASE_URL + "/api/account/farmer/registerFarmer/"
export const GET_ALL_PRODUCTS_API = BASE_URL + "/api/farmer/product"
export const GET_USER_DETAILS = BASE_URL + '/api/account/getUser/'
export const LOGIN_USER = BASE_URL + "/api/account/loginUser/"


//Bid api
export const BID_API = BASE_URL + "/api/bid"
export const BID_DASHBORAD_API = BID_API + "/get_dashboad_data"
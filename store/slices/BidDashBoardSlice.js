import { getAllBidsServices, getBidDashBoardData } from "@/service/Bid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllBidsThunk = createAsyncThunk(
  "bid/BidDashBoard",
  async (query, thunkApi) => {
    try {
      const result = await getAllBidsServices(query);
      return result;
    } catch (err) {
      return thunkApi.rejectWithValue;
    }
  }
);

export const getbidDashBoardThunk = createAsyncThunk(
  "dashboard/dashboard",
  async (query, thunkApi) => {
    try {
      const result = await getBidDashBoardData(query);
      return result;
    } catch (err) {
      return thunkApi.rejectWithValue;
    }
  }
);
export const BidDashBoardSlice = createSlice({
  name: "BidDashBoard",
  initialState: {
    dashboard: {
      total_bids: 0,
      average_bid_price: 0,
      base_bid_price: 0,
      highest_bid_price: 0,
      customer: {
        is_current_customer_added_bid: false,
      },
    },
    bids: [],
    isLoadingBids: false,
    isLoadingDashBoard: false,
  },

  reducers: {
    resetState: (state, action) => {
      state.dashboard = {
        total_bids: 0,
        average_bid_price: 0,
        base_bid_price: 0,
        highest_bid_price: 0,
        customer: {
          is_current_customer_added_bid: false,
        },
      };
      state.bids = []
      state.isLoadingBids = false
      state.isLoadingDashBoard = false
    },
  },
  extraReducers: {
    [getAllBidsThunk.fulfilled]: (state, action) => {
      state.isLoadingBids = false;
      state.bids = action.payload;
    },
    [getAllBidsThunk.pending]: (state, action) => {
      state.isLoadingBids = true;
    },
    [getAllBidsThunk.rejected]: (state, action) => {
      (state.isLoadingBids = false), (state.bids = []);
    },
    [getbidDashBoardThunk.fulfilled]: (state, action) => {
      state.isLoadingDashBoard = false;
      console.log("dash board thunk reducer ", action.payload);
      state.dashboard = action.payload;
    },
  },
});

export const { resetState } = BidDashBoardSlice.actions;
export const selectDashBoardDataState = (state) => state.BidDashBoard.dashboard;
export const selectBidsState = (state) => state.BidDashBoard.bids;
export default BidDashBoardSlice.reducer;

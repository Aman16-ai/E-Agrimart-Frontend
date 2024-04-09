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
      state.bids = [];
      state.isLoadingBids = false;
      state.isLoadingDashBoard = false;
    },
    addBids: (state, action) => {

      // if the current bid is highest then we are placing it on the top of list.
      if (
        state.bids.length !== 0 &&
        state.bids[0].bid_price < action.payload.bid_price
        ) {
          state.bids.unshift(action.payload)
          state.dashboard.highest_bid_price = action.payload.bid_price
      } else {

        // if the the current is the first bid then we update the highest bid price with current bid price.
        if(state.bids.length === 0) {
          state.dashboard.highest_bid_price = action.payload.bid_price
        }
        state.bids = [...state.bids, action.payload];
      }

      // may lead to race condition 
      state.dashboard.total_bids += 1;
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
      if(action.payload?.customer?.is_current_customer_added_bid === false) {
        state.dashboard = action.payload;
      }
      else {
        const response = {...action.payload,[action.payload?.customer] : {
          ...action.payload?.customer,
          "bid_amount" : 0,
          "profit" : 0,
        }}
        console.log(response)
        state.dashboard = response
      }
    },
  },
});

export const { resetState, addBids } = BidDashBoardSlice.actions;
export const selectDashBoardDataState = (state) => state.BidDashBoard.dashboard;
export const selectBidsState = (state) => state.BidDashBoard.bids;
export default BidDashBoardSlice.reducer;

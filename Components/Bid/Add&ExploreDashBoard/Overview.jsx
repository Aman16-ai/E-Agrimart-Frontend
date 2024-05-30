import React from "react";
import BidAmountInput from "./BidAmountInput";
import { BarChartCanvas } from "@/Components/Global/BarChartCanvas";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { indianFormattedString } from "@/utils/stringUtils";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { selectUserData } from "@/store/slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBidsState,
  updateBidThunk,
} from "@/store/slices/BidDashBoardSlice";
import { CreateOrderService } from "@/service/order";

export default function Overview({ crop_id, farmer_id, customer_bid_status }) {
  const currentLoggedInUser = useSelector(selectUserData);
  const bids = useSelector(selectBidsState);
  const dispatch = useDispatch();
  const checkHighestBidLocked = () => {
    if(bids.length === 0) return false
    const highestBid = bids[0].status
    return highestBid === 'Locked'
  }
  const handleLockbidButton = async () => {
    console.log("bids", bids);
    const highestBidId = bids[0].id || null;
    console.log("highestBidID", highestBidId);
    dispatch(
      updateBidThunk({
        payload: {
          status: "Locked",
        },
        id: highestBidId,
      })
    );
  };
  const IsCurrentUserbidLockedAndPlaceOrder = () => {
    if(bids.length === 0) return false;
    if(checkHighestBidLocked() && bids[0].customer.id === currentLoggedInUser.id) return true;
    return false;
  }

  const placeOrder = async() => {
    try {
      if(IsCurrentUserbidLockedAndPlaceOrder()) {
        const bid_id = bids[0].id
        const payload = {
          'bid_id':bid_id
        }
        const result = await CreateOrderService(payload)
        alert('order placed')
      }
    }
    catch(err) {
      alert(err.toString())
    }
  }
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex h-[85%]">
        <div className="w-[60%] h-full">
          <BarChartCanvas />
        </div>
        <div className="w-[40%] ml-7 h-full">
          {currentLoggedInUser?.user_type !== "Farmer" ? (
            <Card className="h-auto">
              <div className={`flex flex-col p-2 rounded-md`}>
                <div className={` flex space-y-1`}>
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>
                      {"Y"}
                      {"U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col ml-3">
                    <p className="text-base font-medium leading-none">
                      Your last bid
                    </p>
                    <p className={`text-xs text-muted-foreground`}>
                      Monday at 5:00pm
                    </p>
                  </div>
                </div>
                <div className={`flex mt-2 font-medium items-end`}>
                  <p className="ml-2">
                    Amount : ₹
                    {indianFormattedString(customer_bid_status?.bid_amount)}
                  </p>
                  <p className="">
                    Profit : +₹
                    {indianFormattedString(customer_bid_status?.profit)}{" "}
                  </p>
                </div>

                <div className="w-full mt-4 flex">
                  <Button className="w-full">History</Button>
                  <Button className="w-full ml-2" variant="destructive">
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
      <div className="w-full h-[15%] mt-auto ml-auto">
        {currentLoggedInUser?.user_type !== "Farmer" && 
        !checkHighestBidLocked() ? 
        (
          <BidAmountInput crop_id={crop_id} farmer_id={farmer_id} />
        ) : 
        (
          IsCurrentUserbidLockedAndPlaceOrder() ? <Button onClick={placeOrder} className="w-full font-bold h-11">Place Order</Button> : bids?.length ? <Button
            onClick={handleLockbidButton}
            className="w-full font-bold h-11"
            disabled={bids?.length && checkHighestBidLocked()}
          >
            {bids?.length && checkHighestBidLocked()?"Bid Locked":"Lock Highest Bid"}
          </Button>:<h3 className="text-center font-semibold text-2xl">There are no bids</h3>
        )}
      </div>
    </div>
  );
}

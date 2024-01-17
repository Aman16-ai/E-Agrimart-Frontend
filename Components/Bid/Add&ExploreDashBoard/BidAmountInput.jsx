"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { addBidService } from "@/service/Bid";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function BidAmountInput({ crop_id, farmer_id, createBid }) {
  const router = useRouter();
  const [bidAmount, setBidAmount] = useState(0);
  const handleSumbit = async() => {
    // router.refresh()
    const payload = {
      farmer: farmer_id,
      crop: crop_id,
      bid_price: bidAmount,
    };

    try {
      console.log(payload)
      // const result = await addBidService(payload)
      // console.log(result)
    }
    catch(err) {
      alert(err)
    }

  };
  return (
    // <div className="mt-4 flex">
    //   <input
    //     type="number"
    //     id="username"
    //     placeholder="Enter your amount"
    //     className="px-3 py-2 border rounded-md"
    //     value={bidAmount}
    //     onChange={(e) => setBidAmount(e.target.value)}
    //     required
    //   />
    //   <button
    //     onClick={handleSumbit}
    //     // type="submit"
    //     className="h-10 w-20 text-white ml-3 rounded-md bg-blue-500"
    //   >
    //     Add Bid
    //   </button>
    // </div>
    <div className="flex w-full items-center space-x-2">
      <Input onChange={(e) => setBidAmount(e.target.value)} type="number" placeholder="Bid Amount" />
      <Button onClick={handleSumbit}>Add</Button>
    </div>
  );
}

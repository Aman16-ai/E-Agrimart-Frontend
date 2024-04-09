import React from 'react'
import BidAmountInput from './BidAmountInput'
import { BarChartCanvas } from '@/Components/Global/BarChartCanvas'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/Components/ui/avatar"
import { indianFormattedString } from '@/utils/stringUtils'
import { Card } from '@/Components/ui/card'
import { Button } from '@/Components/ui/button'

export default function Overview({crop_id, farmer_id,customer_bid_status}) {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full flex h-[85%]'>
        <div className='w-[60%] h-full'>
          <BarChartCanvas/>
        </div>
        <div className='w-[40%] ml-7 h-full'>

        <Card className="h-auto">
        <div className={`flex flex-col p-2 rounded-md`}>
            <div className={` flex space-y-1`}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{"Y"}{"U"}</AvatarFallback>
            </Avatar>
              <div className='flex flex-col ml-3'>
              <p className="text-base font-medium leading-none">Your last bid</p>
              <p className={`text-xs text-muted-foreground`}>
                Monday at 5:00pm
              </p>
              </div>
            </div>
            <div className={`flex mt-2 font-medium items-end`}>
              
            
            <p className='ml-2'>Amount : ₹{indianFormattedString(customer_bid_status?.bid_amount)}</p>
              <p className=''>Profit : +₹{indianFormattedString(customer_bid_status?.profit)} </p>
            </div>

            <div className='w-full mt-4 flex'>
            <Button className="w-full">History</Button>
            <Button className="w-full ml-2" variant="destructive">Remove</Button>
            </div>
          </div>
        </Card>
        </div>
      </div>
        <div className='w-full h-[15%] mt-auto ml-auto'>
            <BidAmountInput crop_id={crop_id} farmer_id={farmer_id}/>
        </div>
    </div>
  )
}

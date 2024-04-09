import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/Components/ui/avatar"
import { capitalize, getFallBackString, indianFormattedString } from "@/utils/stringUtils"
  
  export function Bids({bids}) {
    return (
      <div className="space-y-3">
        {
          bids?.map((bid,i) => {
            return (<div className={`flex items-center p-2 rounded-md ${i === 0? 'bg-gradient-to-r from-amber-500 to-amber-800 shadow-md hover:scale-105':null}`}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{getFallBackString(bid?.customer.user.first_name)}{getFallBackString(bid?.customer.user.last_name)}</AvatarFallback>
            </Avatar>
            <div className={`ml-4 space-y-1 ${i === 0? "text-white":null}`}>
              <p className="text-sm font-medium leading-none">{capitalize(bid?.customer.user.first_name)} {capitalize(bid?.customer.user.last_name)}</p>
              <p className={`text-xs text-muted-foreground ${i===0?"text-white":null}`}>
                {bid?.customer.user.email}
              </p>
            </div>
            <div className={`ml-auto font-medium  flex flex-col items-end ${i === 0 ? "text-white":null}`}>+₹{indianFormattedString(bid.profit)} <p className={`text-xs text-muted-foreground ${i===0?"text-white":null}`}>₹{indianFormattedString(bid?.bid_price)}</p></div>
          </div>)
          })
        }
        
      </div>
    )
  }
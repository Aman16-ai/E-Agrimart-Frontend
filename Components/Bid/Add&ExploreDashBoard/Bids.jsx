import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/Components/ui/avatar"
import { capitalize, getFallBackString, indianFormattedString } from "@/utils/stringUtils"
  
  export function Bids({bids}) {
    return (
      <div className="space-y-8">
        {
          bids?.map((bid) => {
            return (<div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{getFallBackString(bid?.customer.user.first_name)}{getFallBackString(bid?.customer.user.last_name)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{capitalize(bid?.customer.user.first_name)} {capitalize(bid?.customer.user.last_name)}</p>
              <p className="text-sm text-muted-foreground">
                {bid?.customer.user.email}
              </p>
            </div>
            <div className="ml-auto font-medium  flex flex-col items-end">+₹{indianFormattedString(bid.profit)} <p className="text-xs text-muted-foreground">₹{indianFormattedString(bid?.bid_price)}</p></div>
          </div>)
          })
        }
        
      </div>
    )
  }
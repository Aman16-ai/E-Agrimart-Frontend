'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { selectModalOpen,setOpen } from '@/store/slices/BidModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import StatusCard from './StatusCard';
// import { Card, CardContent, CardHeader } from '@mui/material';
import { Card,CardContent,CardHeader, CardDescription, CardTitle } from '@/Components/ui/card';
import { Bids } from './Bids';
import Overview from './Overview';
import { addBids, getAllBidsThunk, getbidDashBoardThunk, resetState, selectBidsState, selectDashBoardDataState } from '@/store/slices/BidDashBoardSlice';
import io from "socket.io-client"
import { disconnectSocket, initSocket } from '@/store/slices/BidSocketSlice';
import { addBidService } from '@/service/Bid';
import { selectUserData } from '@/store/slices/UserSlice';
let socket = null

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height:550,
  bgcolor: 'background.paper',
  borderRadius : "0.6rem",
  boxShadow: 24,
  p: 4,
};

export default function BidModal({crop_id, farmer_id, createBid}) {
    const dispatch = useDispatch()
    const dashBoardData = useSelector(selectDashBoardDataState)
    const allBids = useSelector(selectBidsState)
    const open = useSelector(selectModalOpen)
    const user = useSelector(selectUserData)
//   const handleOpen = () => setOpen(true);
  const handleClose = () => dispatch(setOpen(false));

  React.useEffect(() => {
    socket = io("http://localhost:4000")
    dispatch(initSocket(socket))
    socket.on('received_bids',(data) => {
      console.log('type of recieved data',typeof JSON.parse(data))
      console.log('received socket ',JSON.parse(data))
      dispatch(addBids(JSON.parse(data)))
    })
    return () => {
      dispatch(setOpen(false))
      socket.emit('leave')
    }
  },[])
  React.useEffect(() => {
    if(open) {
      console.log('running this',crop_id)
      const query_dashboard = "?product_id="+crop_id
      dispatch(getbidDashBoardThunk(query_dashboard))
      const query_bids = "?crop="+crop_id
      dispatch(getAllBidsThunk(query_bids))
      socket.emit('join_room',({'product_id':crop_id}))
      console.log('running this', socket)

      // socket.on('received_bids',(data) => {
      //   console.log('type of recieved data',typeof JSON.parse(data))
      //   console.log('received socket ',JSON.parse(data))
      //   dispatch(addBids(JSON.parse(data)))
      // })

    }

    return () => {
      dispatch(resetState())
      // dispatch(disconnectSocket())
    }
  },[crop_id,open])
  console.log('current user ->',user)
  React.useEffect(() => {
    console.log('dash board data ---> ',dashBoardData)
    console.log('all bids ',allBids)
  },[dashBoardData])
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" style={{fontWeight:"bold"}} component="h2">
            Explore & Add Bids
          </Typography>
          <div className='w-full h-full mt-2'>
            <div className='w-full h-[25%] grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <StatusCard title={"Total Bids"} value={dashBoardData.total_bids}/>
              <StatusCard title={"Base Price"} value={dashBoardData.base_bid_price}/>
              <StatusCard title={"Average Bid Price"} value={dashBoardData.average_bid_price}/>
              <StatusCard title={"Highest Bid Price"} value={dashBoardData.highest_bid_price}/>
              
            </div>
            <div className="mt-2 h-[70%] grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[85%]">
                    <Overview crop_id={crop_id} farmer_id={farmer_id} customer_bid_status={dashBoardData.customer}/>
                  </CardContent>
                </Card>
                <Card className="col-span-3 overflow-y-scroll">
                  <CardHeader>
                    <CardTitle>Bids</CardTitle>
                    <CardDescription>
                      10 Bids in last hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Bids bids={allBids}/>
                  </CardContent>
                </Card>
              </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
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

    const open = useSelector(selectModalOpen)
//   const handleOpen = () => setOpen(true);
  const handleClose = () => dispatch(setOpen(false));

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
              <StatusCard title={"Total Bids"}/>
              <StatusCard title={"Base Price"}/>
              <StatusCard title={"Average Bid Price"}/>
              <StatusCard title={"Highest Bid Price"}/>
              
            </div>
            <div className="mt-2 h-[70%] grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 h-[85%]">
                    <Overview />
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
                    <Bids/>
                  </CardContent>
                </Card>
              </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
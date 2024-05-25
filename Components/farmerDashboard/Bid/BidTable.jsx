'use client'
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/Components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsThunk, selectAllProductState } from "@/store/slices/ProductSlice";
import BidModal from "@/Components/Bid/Add&ExploreDashBoard/BidModal";
import { setOpen } from "@/store/slices/BidModalSlice";


export default function BidTable() {
  const allProducts = useSelector(selectAllProductState)
  const disptach = useDispatch()
  const [selectedProductId,setSelectedProductId] = useState(null)
  const [farmerId,setFarmerId] = useState(null)

  useEffect(() => {
    const query="?farmer="+1
    disptach(getAllProductsThunk({query:query,authTrue:true}))
  },[])

  const handleMoreAction = (product_id,farmer_id) => {
    console.log(product_id)
    setSelectedProductId(product_id)
    setFarmerId(farmer_id)
  }
  useEffect(() => {
    if( selectedProductId !== null && farmerId !== null) {
      disptach(setOpen(true))
    }
  },[selectedProductId,farmerId])
  return (
    <>
      <BidModal crop_id={selectedProductId} farmer_id={farmerId}/>
      <Table>
      <TableCaption>A list of your recent crops with bids.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Crop Id</TableHead>
          <TableHead>Crop name</TableHead>
          <TableHead>Bids</TableHead>
          <TableHead>Highest Bid</TableHead>
          <TableHead>Base Price</TableHead>
          <TableCell>Profit</TableCell>
          <TableHead>Locked</TableHead>
          <TableHead>More action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          allProducts.map((product) => {
            return <TableRow>
              <TableCell className='font-medium'>{product.id}</TableCell>
              <TableCell>{product.crop_name}</TableCell>
              <TableCell>{product.total_bids}</TableCell>
              <TableCell>{product.highest_bid_price}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{Math.max(product.highest_bid_price - product.price,0)}</TableCell>
              <TableCell>True</TableCell>
              <TableCell><Button onClick={e=>handleMoreAction(product.id,product.farmer.id)}>Show</Button></TableCell>
            </TableRow>
          })
        }
      </TableBody>
    </Table>
    </>
  );
}

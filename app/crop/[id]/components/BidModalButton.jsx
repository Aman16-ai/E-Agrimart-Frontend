'use client'
import { Button } from '@/Components/ui/button'
import { setOpen } from '@/store/slices/BidModalSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function BidModalButton() {
    const dispatch = useDispatch()
    const handleModalControl = (e) => {
        dispatch(setOpen(true))
    }
  return (
    <Button onClick={handleModalControl}>Add & Explore Bids</Button>
  )
}

import React, { useEffect, useState } from 'react'
import { FormControl,InputLabel,MenuItem,Select,Stack,TextField } from '@mui/material'
import { statesAndcities } from '@/utils/addressUtils'
import { useDispatch, useSelector } from 'react-redux'
import { selectFormAddressState, updateAddress } from '@/store/slices/multistepFormSlice'
export default function AddressDetails() {
    const [cities,setCities] = useState([])

    const addressFormData = useSelector(selectFormAddressState)
    const dispatch = useDispatch()
    const onHandleChange = (e) => {
        dispatch(updateAddress({name:e.target.name,value:e.target.value}))
    }
    const getStates = () => {
        const states = Object.keys(statesAndcities)
        return states
    }

    useEffect(()=> {
        if(addressFormData.state !== null) {
            setCities(statesAndcities[addressFormData.state])
        }
    },[addressFormData.state])

  return (
    <>
        <div className='flex flex-col w-[30vw] h-[50vh]'>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="State"
                name='state'
                value={addressFormData.state}
                onChange={onHandleChange}
            >
                {
                    getStates().map((state,i) => {
                        return <MenuItem key={i} value={state}>{state}</MenuItem>
                    })
                }
            </Select>
            </FormControl>

            <FormControl fullWidth style={{marginTop:"0.75rem"}}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="City"
                name='city'
                value={addressFormData.city}
                onChange={onHandleChange}
            >
                {
                    cities?.map((city,i) => {
                        return <MenuItem key={i} value={city}>{city}</MenuItem>
                    })
                }
            </Select>
            </FormControl>
            <Stack direction={'row'} style={{marginTop:"0.75rem"}}>
                <TextField variant='outlined' name='pincode' onChange={onHandleChange} inputProps={{type:'number'}} label='Pincode'/>
                <TextField variant='outlined' name='landmark' onChange={onHandleChange} style={{marginLeft:"20px"}} label='Landmark'/>
            </Stack>
        </div>
    </>
  )
}

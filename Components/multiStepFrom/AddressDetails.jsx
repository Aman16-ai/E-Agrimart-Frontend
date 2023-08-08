import React, { useEffect, useState } from 'react'
import { FormControl,InputLabel,MenuItem,Select,Stack,TextField } from '@mui/material'
import { statesAndcities } from '@/utils/addressUtils'
export default function AddressDetails() {
    const [selectedState,setSelectedState] = useState(null)
    const [cities,setCities] = useState([])
    const handleStateChange = (e) => {
        console.log(e.target.value)
        setSelectedState(e.target.value)
    }
    const handleCityChange = (e) => {

    }
    const getStates = () => {
        const states = Object.keys(statesAndcities)
        return states
    }

    useEffect(()=> {
        if(selectedState !== null) {
            setCities(statesAndcities[selectedState])
        }
    },[selectedState])

  return (
    <>
        <div className='flex flex-col w-[30vw] h-[50vh]'>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="State"
                value={selectedState}
                onChange={handleStateChange}
            >
                {
                    getStates().map(state => {
                        return <MenuItem value={state}>{state}</MenuItem>
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
                onChange={handleCityChange}
            >
                {
                    cities.map(city => {
                        return <MenuItem value={city}>{city}</MenuItem>
                    })
                }
            </Select>
            </FormControl>
            <Stack direction={'row'} style={{marginTop:"0.75rem"}}>
                <TextField variant='outlined' label='Pincode'/>
                <TextField variant='outlined' style={{marginLeft:"20px"}} label='Landmark'/>
            </Stack>
        </div>
    </>
  )
}

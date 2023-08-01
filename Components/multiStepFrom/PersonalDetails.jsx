import { Stack, TextField } from '@mui/material'
import React from 'react'

export default function PersonalDetails() {
  return (
    <>
        <div className='flex flex-col w-[30vw] h-[50vh]'>
            <Stack direction={'row'}>
                <TextField variant='outlined' placeholder='First Name'/>
                <TextField variant='outlined' style={{marginLeft:"20px"}} placeholder='Last Name'/>
            </Stack>
            <TextField variant='outlined' style={{marginTop:"0.75rem"}} placeholder='Username'/>
            <TextField variant='outlined' style={{marginTop:"0.75rem"}} placeholder='Email'/>
            <TextField variant='outlined' style={{marginTop:"0.75rem"}} placeholder='Contact No.'/>
            <TextField variant='outlined' style={{marginTop:"0.75rem"}} placeholder='Password'/>
        </div>
    </>
  )
}

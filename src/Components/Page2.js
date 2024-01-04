import { Box } from '@mui/material'
import React from 'react'
import img from './Assets/Screenshot (1).png'
import img1 from './Assets/Screenshot (2).png'
import img2 from './Assets/bottom.png'

const Page2 = () => {
  return (
    <Box >
    <Box>      <img src={img} width={'100%'} alt=''/> </Box>
<Box sx={{mt:'-6px'}}>
      <img src={img1} width={'100%'} alt=''/>
      </Box>
      
      
    </Box>
  )
}

export default Page2

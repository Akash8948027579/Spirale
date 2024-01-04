import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './Assets/C.png'
import img1 from './Assets/Group.png'
import img2 from './Assets/php.png'
import img3 from './Assets/map.png'

const Page3 = () => {
  return (
    <Box>
      <Box sx={{width:'99%', height:'400px', display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'50px',}}>
      <Box sx={{width:'395px', height:'340px', marginLeft:{md:'130px', xs:'70px'}, mt:'75px', }}>
        <Box sx={{width:'356px', height:'300px', borderRadius:'20px'}}> <img src={img} width={'100%'} height={'100%'} alt=''/></Box>
        </Box>

        <Box sx={{width:'542px', height:'200px',mt:{md:'115px', xs:'-29px'}, ml:{md:'125px', xs:'30px'}}}>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:700, fontSize:'40px', color:'#2196F3'}}>Custom Software Development</Typography>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:600, fontSize:'20px', color:'#2196F3'}}>Your Blueprint, our code. Get custom solutions and endless possibilities to unfold limitless innovation.</Typography>
          <Box sx={{width:'102px', height:'32px', borderRadius:'10px', border:'2px solid #2196F3', padding:'7px', mt:'23px'}}>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:600, fontSize:'20px', textAlign:'center', color:'#2196F3'}}>Explore</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{width:'99%', height:'400px',  display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'50px',mt:{md:'30px', xs:'125px'}}}>

      <Box sx={{width:'542px', height:'200px',mt:'115px', ml:{md:'125px', xs:'30px'}}}>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:700, fontSize:'40px', color:'#2196F3'}}>Grow Your Business With Us</Typography>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:600, fontSize:'20px', color:'#2196F3'}}>Your Blueprint, our code. Get custom solutions and endless possibilities to unfold limitless innovation.</Typography>
          <Box sx={{width:'102px', height:'32px', borderRadius:'10px', border:'2px solid #2196F3', padding:'7px', mt:'23px'}}>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:600, fontSize:'20px', textAlign:'center', color:'#2196F3'}}>Explore</Typography>
          </Box>
        </Box>

      <Box sx={{width:'472px', height:'340px', marginLeft:{md:'56px', xs:'70px'}, mt:{md:'86px', xs:'-20px'}, }}>
        <Box > <img src={img1} width={'100%'} height={'100%'} alt=''/></Box>
        </Box>

       
      </Box>

      <Box sx={{width:'99%', height:'400px',  display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'50px',mt:{md:'0px', xs:'235px'}}}>
      <Box sx={{width:'395px', height:'340px', marginLeft:{md:'120px', xs:'37px'}, mt:'20px', }}>
        <Box sx={{width:'500px', height:'319px', paddingTop:'50px'}}> <img src={img3} width={'100%'} height={'100%'} alt=''/></Box>

        </Box>

        <Box sx={{width:'542px', height:'200px',mt:{md:'115px', xs:'0px'}, ml:{md:'150px',xs:'30px'}}}>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:700, fontSize:'40px', color:'#2196F3'}}>We Create Brands</Typography>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:600, fontSize:'20px', color:'#2196F3'}}>Stand out from the crowd with strategic Digital Marketing Approach. Improvise your brand identity and connect with target audience.</Typography>
          <Box sx={{width:'102px', height:'32px', borderRadius:'10px', border:'2px solid #2196F3', padding:'7px', mt:'23px'}}>
          <Typography sx={{fontFamily:'Source Sans Pro', fontWeight:600, fontSize:'20px', textAlign:'center', color:'#2196F3'}}>Explore</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Page3

import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Nexcentapp from './Nexcentapp'
import img from './Assets/comp.png'
import img1 from './Assets/Logo.png'
import img2 from './Assets/Logo (1).png'
import img3 from './Assets/Logo (2).png'
import img4 from './Assets/Logo (3).png'
import img5 from './Assets/Logo (4).png'
import img6 from './Assets/Logo (5).png'
import img7 from './Assets/mp.png'


const Nexcent = () => {
  return (
    <Box>
<Container > <Nexcentapp/></Container>
<Box sx={{ display:'flex', justifyContent:'space-between', flexDirection:{md:'row', xs:'column'}, gap:'0px'}}>
  <Box sx={{margin:'185px 0px 0px 55px', paddingRight:'10px'}}>
    <Typography sx={{color:'#4D4D4D', fontSize:64, fontFamily:'Inter', fontWeight:600,lineHeight:'76px'}}>Lessons and insights</Typography>
    <Typography sx={{color:'#4CAF4F', fontSize:64, fontFamily:'Inter', fontWeight:600,lineHeight:'76px'}}>from 8 years</Typography>
    <Typography sx={{color:'#717171', fontSize:16, fontFamily:'Inter', fontWeight:400,lineHeight:'76px'}}>Where to grow your business as a photographer: site or social media?</Typography>
    <Box sx={{width: '103px', height: '40px',  background: '#4CAF4F', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<Box sx={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Register</Box>
</Box>
  </Box>
  <Box sx={{mt:'145px', ml:{md:'0px', xs:'50px'}, mr:5, boxSizing:'border-box'}}> <img src={img} alt=''/></Box>
</Box>

{/*--------------------------------------- Our Clients ---------------------------------------------------------------- */}
<Box>
<Box sx={{paddingTop:10, width:'100%'}}>
<Typography sx={{fontFamily:'Inter', fontWeight:600, fontSize:36, textAlign:'center', color:'#4D4D4D'}}>Our Clients</Typography>
<Typography sx={{fontFamily:'Inter', fontWeight:400, fontSize:16, textAlign:'center', color:'#717171'}}>We have been working with some Fortune 500+ clients</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px', paddingBottom:'10px', mt:8, flexWrap:'wrap', }}>
<img src={img1} alt=''/>
<img src={img2} alt=''/>
<img src={img3} alt=''/>
<img src={img4} alt=''/>
<img src={img5} alt=''/>
<img src={img6} alt=''/>
<img src={img3} alt=''/>
</Box>
</Box>

<Box>
<Box>
  <Box sx={{justifyContent:'center', display:'flex', mt:8}}>
  <Typography sx={{fontFamily:'Inter', fontWeight:600, fontSize:36, textAlign:'center', color:'#4D4D4D', width:'572px'}}>Manage your entire community in a single system</Typography>
  </Box>
  <Typography sx={{fontFamily:'Inter', fontWeight:400, fontSize:16, textAlign:'center', color:'#717171', }}>Who is Nextcent suitable for?</Typography>
</Box>

<Box sx={{display:'flex', justifyContent:'space-around'}}>

{/*--------------------------------- Frame-1 ------------------------------------------------------------------- */}
  <Box >
    <Box>
      <Box sx={{display:'flex', justifyContent:'center'}}><img src={img7} alt=''/></Box>
      <Box sx={{justifyContent:'center', display:'flex',}}>
      <Typography sx={{fontFamily:'Inter', fontWeight:600, fontSize:28,  color:'#4D4D4D',width:'50px'}}>Membership Organisations</Typography>
      </Box>
    </Box>
    <Box><Typography sx={{fontFamily:'Inter', fontWeight:400, fontSize:14, textAlign:'center', color:'#717171',width:'50px' }}>Our membership management software provides full automation of membership renewals and payments</Typography></Box>
  </Box>


{/*---------------------------------------------- Frame-2 ------------------------------------------------------------ */}
<Box>
    <Box>
      <Box><img src={img7} alt=''/></Box>
      <Typography sx={{fontFamily:'Inter', fontWeight:600, fontSize:28, textAlign:'center', color:'#4D4D4D',width:'50px'}}>Membership Organisations</Typography>
    </Box>
    <Box><Typography sx={{fontFamily:'Inter', fontWeight:400, fontSize:14, textAlign:'center', color:'#717171',width:'50px' }}>Our membership management software provides full automation of membership renewals and payments</Typography></Box>
  </Box>

  {/*------------------------------------------------- Frame-3 --------------------------------------------------------- */}
  <Box>
    <Box>
      <Box><img src={img7} alt=''/></Box>
      <Typography sx={{fontFamily:'Inter', fontWeight:600, fontSize:28, textAlign:'center', color:'#4D4D4D',width:'50px'}}>Membership Organisations</Typography>
    </Box>
    <Box><Typography sx={{fontFamily:'Inter', fontWeight:400, fontSize:14, textAlign:'center', color:'#717171',width:'50px' }}>Our membership management software provides full automation of membership renewals and payments</Typography></Box>
  </Box>

  </Box>


</Box>

    </Box>
  )
}

export default Nexcent

import React from 'react'
import { Box, Typography } from '@mui/material';
import img from './Assets/Default.png'
import img1 from './Assets/spiraleinfosoft.png'
import img2 from './Assets/Frame 1171275476.png'
import img3 from './Assets/Call.png'
import img4 from './Assets/cycle.png'
import img5 from './Assets/Solutions.png'
import img6 from './Assets/web.png'
import img7 from './Assets/bottom.png'
import Appbar from './Appbar';
import Contents from './Contents';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const Home = () => {
  return (
    <>
    <Box sx={{minWidth:{xs:'750px', md:'1300px'}, height:'700px', position:'absolute'}} > <img src={img} alt='' width={'100%'} height={'100%'}/></Box>
    <Appbar/>

    <Box sx={{width:'791px', height:'393px', position:'absolute',display:'flex', justifyContent:'center', border:'.0px solid #F3F2F7', mt:'150px', ml:{lg:'323px',md:'139px'}, paddingLeft:{md:'158px', lg:'0px'} }}>
    <Box sx={{ml:'0px', mt:'0px',}}>
    <Typography sx={{color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', textAlign:'center', letterSpacing:'5px'}}>DESIGN SMARTER - NOT HARDER</Typography>
    <Typography sx={{color: 'black', fontSize: 38, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', textAlign:'center',lineHeight:'90px'}}>We don’t just develop</Typography>
    <Typography sx={{color: 'black', fontSize: 61, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', textAlign:'center',lineHeight:'10px'}}>Softwares</Typography>
    <Typography sx={{color: 'black', fontSize: 38, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', textAlign:'center',lineHeight:'80px'}}>we build imaginations</Typography>
    <Typography sx={{color: 'black', fontSize: 16, fontFamily: 'Source Sans Pro', fontWeight: '400', wordWrap: 'break-word', textAlign:'center',mt:'30px'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor  do amet sint. Velit officia consequat duis enim velit mollit. 
<br/>Exercitation veniam consequat sunt nostrud amet.</Typography>
</Box>

<Box sx={{display:'flex', flexDirection:'row', gap:'20px', justifyContent:'center', position:'absolute', mt:'338px'}}>
<Box sx={{backgroundColor: '#2699F3', borderRadius: 40,width:'108px', height:'48px', }}>
<Typography sx={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Source Sans Pro', fontWeight: '700', lineHeight: 3.22, wordWrap: 'break-word'}}>Learn more</Typography>
</Box>
<Box sx={{border:'2px solid #F3F2F7', borderRadius: 40,width:'108px', height:'48px',}}>
<Typography sx={{textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Source Sans Pro', fontWeight: '700', lineHeight: 3.22, wordWrap: 'break-word'}}>Contact us</Typography>
</Box>
</Box>

    
    </Box>
    <Box sx={{position:'absolute', mt:'600px', display:{xs:'flex',md:'block'}, justifyContent:'center', minWidth:{xs:'750px', md:'1200px'}, }}><Contents/></Box>
    <Box sx={{mt:{md:'1300px', xs:'1452px'}, position:'absolute', paddingLeft:{md:'10px', xs:'120px'}}}>  <Page1/> </Box>
    <Box sx={{position:'absolute', mt:{md:'2000px', xs:'2900px'}, minWidth:{xs:'750px', md:'1200px'}, minHeight:'100%', padding:'10px'}}> <Page2/></Box>
    <Box sx={{position:'absolute',  mt:{md:'2900px', xs:'3498px'}, minWidth:{xs:'750px', md:'1200px'}, padding:'10px'}}> <img src={img2} alt='' width={'100%'} height={'100%'}/></Box>
    <Box sx={{position:'absolute',mt:{md:'3300px', xs:'3705px'}, paddingLeft:{md:'0px', xs:'90px'} }}> <Page3/></Box>
    <Box sx={{position:'absolute' , mt:{md:'4600px',xs:'5500px' }, minWidth:{xs:'750px', md:'1200px'}, padding:'10px'}}> <img src={img3} alt='' width={'100%'}/></Box>
    <Box sx={{position:'absolute' , mt:{md:'4900px',xs:'5700px' }, minWidth:{xs:'750px', md:'1100px'},padding:{md:'78px 53px 11px 58px ', xs:'10px'}}}> <img src={img4} alt='' width={'100%'}/></Box>
    <Box sx={{position:'absolute' , mt:{md:'5500px',xs:'6000px' }, minWidth:{xs:'750px', md:'1200px'},padding:'10px'}}> <img src={img5} alt='' width={'100%'}/></Box>
    <Box sx={{position:'absolute' , mt:{md:'6000px',xs:'6300px' }, minWidth:{xs:'750px', md:'1200px'},padding:'10px'}}> <img src={img6} alt='' width={'100%'}/></Box>
    <Box sx={{position:'absolute' , mt:{md:'6500px',xs:'6700px' }, minWidth:{xs:'750px', md:'1200px'},padding:'10px'}}> <img src={img7} alt='' width={'100%'}/></Box>
    
    </>
    

  )
}

export default Home

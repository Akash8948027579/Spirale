import { Typography, Box } from '@mui/material'
import React from 'react'
import img from './Assets/Screenshot.png'
import img1 from './Assets/Screenshot1.png'
import img2 from './Assets/unicons-cloud-computing.png'
import img3 from './Assets/mdi_join_full.png'
import img4 from './Assets/mdi_home_repair_service.png'
import img5 from './Assets/Screenshot1.png'
import img6 from './Assets/radial c84eb.png'
import img7 from './Assets/radial c84et.png'

const Page1 = () => {
    return (
        <>
        
        <Box sx={{position:'absolute', mt:'180px'}}> <img src={img6} alt=''/></Box>
        <Box sx={{position:'absolute', mt:'0px',ml:'650px', justifyContent:'flex-end', display:{md:'block', xs:'none'}}}> <img src={img7} alt=''/></Box>
        

            <Typography sx={{
                color: '#070B3B',
                fontSize: 28,
                fontFamily: 'Inter',
                fontWeight: '700',
                wordWrap: 'break-word', textAlign: 'center',minWidth:'530px', position:'relative'
            }}>We provide solutions that works</Typography>

            <Box sx={{ width: '100%', height: '650px', display: 'inline-flex',flexDirection:{md:'row', xs:'column'}, justifyContent:'center' }}>
                <Box sx={{
                    width: '50%',
                    height: '100%', display:'flex',flexDirection:'row',gap:'10px', mt:{md:'0px', xs:'660px'}, ml:{md:'0px', xs:'-38px'}, position:'relative'
                }}>
                    <Box sx={{ paddingTop:'65px',paddingLeft:{md:'97px', xs:'53px'}, justifyContent:'center',alignItems:'flex-start', gap:'0px', display:'inline-flex'}}> <img src={img} alt=''/> </Box>
                    <Box sx={{paddingBottom:'44px',paddingTop:{md:'0px', xs:'280px'}, justifyContent:'center',alignItems:'flex-end', gap:'0px', display:'inline-flex'}}> <img src={img5} alt=''/> </Box>
                </Box>

                <Box sx={{
                    width: '50%',
                    height: '100%',
                }}>
                <Box sx={{paddingLeft:{md:'76px', xs:'32px'},position:'relative'}}>
                    <Box sx={{width:'396px', height:'144px', borderRadius:'20px',margin:'20px', backgroundColor:'#2196F3', padding:'15px', display:'inline-flex'}}>
                        <Box> <img src={img2}/></Box>
                        <Box sx={{paddingLeft:'10px'}}>
                        <Typography sx={{color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Holistic Approach</Typography>
                        <Typography sx={{width: '100%', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We don’t just address immediate challenges, we envision long-term impact. Our comprehensive strategies consider every aspect, enabling seamless integration and future scalability </Typography>
                        </Box>
                    </Box>

                    <Box sx={{width:'396px', height:'162px', borderRadius:'20px',margin:'20px', backgroundColor:'#2196F3', padding:'15px', display:'inline-flex'}}>
                        <Box> <img src={img3}/></Box>
                        <Box sx={{paddingLeft:'10px'}}>
                        <Typography sx={{color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Client-Centricity</Typography>
                        <Typography sx={{width: '100%', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Our clients are not just customers, they are partners on a shared journey. We actively listen, adapt to their needs, and ensure their success through transparent communication and unwavering dedication.</Typography>
                        </Box>
                    </Box>

                    <Box sx={{width:'402px', height:'144px', borderRadius:'20px',margin:'20px', backgroundColor:'#2196F3', padding:'15px', display:'inline-flex'}}>
                        <Box> <img src={img4}/></Box>
                        <Box sx={{paddingLeft:'10px'}}>
                        <Typography sx={{color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>End-To-End-Services</Typography>
                        <Typography sx={{width: '100%', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>From conceptualization to deployment and ongoing support, we offer comprehensive end-to-end services. This streamline the process for our clients and ensures a seamless experience from start to finish.</Typography>
                        </Box>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Page1
